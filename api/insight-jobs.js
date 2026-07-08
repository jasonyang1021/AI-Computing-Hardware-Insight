const { commitFiles, readFile } = require("./_lib/github");
const { generateInsightReport } = require("./_lib/openai");

const topics = {
  "glass-core": {
    name: "玻璃基板",
    skillPath: "app/skills/glass-core-insight.md",
    reportPath: "app/reports/glass-core-report.html",
  },
  hbm: {
    name: "HBM",
    skillPath: "app/skills/hbm-industry-insight.md",
    reportPath: "app/reports/hbm-report.html",
  },
};

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { topicId, brief } = request.body || {};
    const topic = topics[topicId];
    if (!topic) {
      response.status(400).json({ error: `Unsupported topicId: ${topicId}` });
      return;
    }

    const now = new Date();
    const archiveName = now.toISOString().replace(/[:.]/g, "-");
    const [skill, currentReport] = await Promise.all([
      readFile(topic.skillPath),
      readFile(topic.reportPath),
    ]);

    if (!skill) throw new Error(`Missing skill file: ${topic.skillPath}`);
    if (!currentReport) throw new Error(`Missing report file: ${topic.reportPath}`);

    const nextReport = await generateInsightReport({
      topicName: topic.name,
      skill,
      currentReport,
      brief,
    });

    const metadata = {
      topicId,
      topicName: topic.name,
      updatedAt: now.toISOString(),
      brief: brief || "",
      skillPath: topic.skillPath,
      reportPath: topic.reportPath,
      archivePath: `archive/${topicId}/${archiveName}.html`,
    };

    const commit = await commitFiles(
      [
        {
          path: metadata.archivePath,
          content: currentReport,
        },
        {
          path: topic.reportPath,
          content: nextReport,
        },
        {
          path: `metadata/${topicId}.json`,
          content: JSON.stringify(metadata, null, 2),
        },
      ],
      `Update ${topic.name} insight report - ${now.toISOString().slice(0, 10)}`,
    );

    response.status(200).json({
      ok: true,
      updatedAt: now.toISOString(),
      archivePath: metadata.archivePath,
      reportPath: topic.reportPath,
      commit,
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
