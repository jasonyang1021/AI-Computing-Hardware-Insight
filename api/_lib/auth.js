const DEFAULT_USERS = [
  {
    name: "Jason",
    email: "jasonyang1021@gmail.com",
    role: "Owner",
    topics: ["*"],
    status: "Active",
  },
];

const ROLE_LEVEL = {
  Viewer: 1,
  Expert: 2,
  Owner: 3,
};

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function parseCsv(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function configuredUsers() {
  if (process.env.ACCESS_USERS_JSON) {
    try {
      return JSON.parse(process.env.ACCESS_USERS_JSON);
    } catch (error) {
      throw new Error(`ACCESS_USERS_JSON is invalid JSON: ${error.message}`);
    }
  }

  const ownerEmails = parseCsv(process.env.OWNER_EMAILS);
  const expertEmails = parseCsv(process.env.EXPERT_EMAILS);
  const viewerEmails = parseCsv(process.env.VIEWER_EMAILS);
  const envUsers = [
    ...ownerEmails.map((email) => ({ name: email, email, role: "Owner", topics: ["*"], status: "Active" })),
    ...expertEmails.map((email) => ({ name: email, email, role: "Expert", topics: ["*"], status: "Active" })),
    ...viewerEmails.map((email) => ({ name: email, email, role: "Viewer", topics: [], status: "Active" })),
  ];

  return envUsers.length ? envUsers : DEFAULT_USERS;
}

function publicUsers() {
  return configuredUsers().map((user) => ({
    name: user.name || user.email,
    email: normalizeEmail(user.email),
    role: user.role || "Viewer",
    topics: Array.isArray(user.topics) ? user.topics : parseCsv(user.topics),
    status: user.status || "Active",
  }));
}

async function actorFromRequest(request) {
  const body = request.body || {};
  const tokenEmail = body.idToken ? await emailFromGoogleToken(body.idToken) : "";
  const email = normalizeEmail(tokenEmail || body.userEmail || request.headers["x-user-email"]);
  const user = publicUsers().find((candidate) => candidate.email === email);

  if (!email) return { email: "", role: "Anonymous", topics: [], status: "Missing" };
  if (!user) return { email, role: "Anonymous", topics: [], status: "Denied" };
  return user;
}

async function emailFromGoogleToken(idToken) {
  if (!process.env.GOOGLE_CLIENT_ID) return "";

  const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
  if (!response.ok) throw new Error("Google sign-in token could not be verified");

  const payload = await response.json();
  if (payload.aud !== process.env.GOOGLE_CLIENT_ID) throw new Error("Google sign-in token audience mismatch");
  if (payload.email_verified !== "true" && payload.email_verified !== true) {
    throw new Error("Google email is not verified");
  }

  return payload.email;
}

function canEditTopic(actor, topicId) {
  if (actor.role === "Owner") return true;
  if (actor.role !== "Expert") return false;
  return actor.topics.includes("*") || actor.topics.includes(topicId);
}

async function requireTopicEditor(request, topicId) {
  const actor = await actorFromRequest(request);
  if (actor.status !== "Active" || !canEditTopic(actor, topicId)) {
    const error = new Error(`Permission denied for ${actor.email || "anonymous user"}`);
    error.statusCode = 403;
    throw error;
  }
  return actor;
}

module.exports = {
  actorFromRequest,
  publicUsers,
  requireTopicEditor,
  ROLE_LEVEL,
};
