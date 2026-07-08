const DEFAULT_REPO = "jasonyang1021/AI-Computing-Hardware-Insight";

function githubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repoSlug = process.env.GITHUB_REPO || DEFAULT_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token) throw new Error("Missing GITHUB_TOKEN");
  const [owner, repo] = repoSlug.split("/");
  if (!owner || !repo) throw new Error("GITHUB_REPO must look like owner/repo");
  return { token, owner, repo, branch };
}

async function githubFetch(path, options = {}) {
  const { token, owner, repo } = githubConfig();
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub ${response.status}: ${text}`);
  }

  return response.json();
}

async function readFile(path) {
  const { branch } = githubConfig();
  try {
    const file = await githubFetch(`/contents/${encodeURIComponentPath(path)}?ref=${encodeURIComponent(branch)}`);
    if (!file.content) return "";
    return Buffer.from(file.content, "base64").toString("utf8");
  } catch (error) {
    if (String(error.message).includes("GitHub 404")) return "";
    throw error;
  }
}

async function commitFiles(files, message) {
  const { branch } = githubConfig();
  const ref = await githubFetch(`/git/ref/heads/${encodeURIComponent(branch)}`);
  const baseCommit = await githubFetch(`/git/commits/${ref.object.sha}`);

  const treeEntries = await Promise.all(
    files.map(async (file) => {
      const blob = await githubFetch("/git/blobs", {
        method: "POST",
        body: JSON.stringify({
          content: file.content,
          encoding: "utf-8",
        }),
      });
      return {
        path: file.path,
        mode: "100644",
        type: "blob",
        sha: blob.sha,
      };
    }),
  );

  const tree = await githubFetch("/git/trees", {
    method: "POST",
    body: JSON.stringify({
      base_tree: baseCommit.tree.sha,
      tree: treeEntries,
    }),
  });

  const commit = await githubFetch("/git/commits", {
    method: "POST",
    body: JSON.stringify({
      message,
      tree: tree.sha,
      parents: [ref.object.sha],
    }),
  });

  await githubFetch(`/git/refs/heads/${encodeURIComponent(branch)}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha }),
  });

  const { owner, repo } = githubConfig();
  return {
    sha: commit.sha,
    url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
  };
}

function encodeURIComponentPath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

module.exports = {
  commitFiles,
  readFile,
};
