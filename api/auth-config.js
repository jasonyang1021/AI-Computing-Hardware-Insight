const { publicUsers } = require("./_lib/auth");

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  response.status(200).json({
    googleClientId: process.env.GOOGLE_CLIENT_ID || "",
    users: publicUsers(),
    roles: ["Owner", "Expert", "Viewer"],
  });
};
