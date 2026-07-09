const { commitFiles } = require("./_lib/github");
const { requireTopicEditor } = require("./_lib/auth");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { topicId, skillName, content } = request.body || {};
    if (!topicId || !skillName || !content) {
      response.status(400).json({ error: "topicId, skillName, and content are required" });
      return;
    }

    const actor = await requireTopicEditor(request, topicId);
    const normalizedSkillName = skillName.replace(/[^a-zA-Z0-9._-]/g, "-");
    const now = new Date();
    const commit = await commitFiles(
      [
        {
          path: `skills/${normalizedSkillName}.md`,
          content,
        },
        {
          path: `app/skills/${normalizedSkillName}.md`,
          content,
        },
        {
          path: `metadata/${topicId}-skill.json`,
          content: JSON.stringify(
            {
              topicId,
              skillName: normalizedSkillName,
              updatedAt: now.toISOString(),
              updatedBy: actor.email,
              role: actor.role,
            },
            null,
            2,
          ),
        },
      ],
      `Update ${normalizedSkillName} skill - ${now.toISOString().slice(0, 10)}`,
    );

    response.status(200).json({
      ok: true,
      updatedAt: now.toISOString(),
      commit,
    });
  } catch (error) {
    response.status(error.statusCode || 500).json({ error: error.message });
  }
};
