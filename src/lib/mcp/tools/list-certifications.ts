import { defineTool } from "@lovable.dev/mcp-js";

const certifications = [
  { code: "BCI", name: "Better Cotton Initiative" },
  { code: "GOTS", name: "Global Organic Textile Standard" },
  { code: "OCS", name: "Organic Content Standard" },
  { code: "OEKO-TEX", name: "OEKO-TEX Standard 100" },
];

export default defineTool({
  name: "list_certifications",
  title: "List certifications",
  description: "List the sustainability and quality certifications held by JCO Fabrics.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      { type: "text", text: certifications.map((c) => `${c.code} — ${c.name}`).join("\n") },
    ],
    structuredContent: { certifications },
  }),
});
