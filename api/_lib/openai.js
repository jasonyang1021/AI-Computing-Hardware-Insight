async function generateInsightReport({ topicName, skill, currentReport, brief }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY");

  const model = process.env.OPENAI_MODEL || "gpt-5.2";
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "You are an expert AI computing hardware industry analyst. Generate decision-oriented, evidence-aware industry insight reports. Return only a complete standalone HTML document. Do not wrap it in markdown fences.",
        },
        {
          role: "user",
          content: [
            `Topic: ${topicName}`,
            `Update brief: ${brief || "Refresh the report according to the skill."}`,
            "",
            "Skill:",
            skill,
            "",
            "Current HTML report:",
            currentReport,
            "",
            "Task:",
            "Create an updated complete HTML report. Preserve the current report's readable archive style where possible. Update conclusions, tables, source notes, and timestamps according to the skill and brief. If evidence is uncertain, label it as inference.",
          ].join("\n"),
        },
      ],
      max_output_tokens: Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || 20000),
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI ${response.status}: ${text}`);
  }

  const data = await response.json();
  const output = extractText(data).trim();
  if (!output) throw new Error("OpenAI returned an empty report");
  return stripCodeFence(output);
}

function extractText(data) {
  if (data.output_text) return data.output_text;
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join("");
}

function stripCodeFence(text) {
  return text.replace(/^```html\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "");
}

module.exports = {
  generateInsightReport,
};
