import { defineTool } from "@lovable.dev/mcp-js";

const fabrics = [
  "Cotton",
  "Linen",
  "Jacquard",
  "Viscose",
  "Twill",
  "Yarn-dyed",
  "Specialty fabrics",
];

export default defineTool({
  name: "list_fabrics",
  title: "List fabrics",
  description: "List the fabric categories manufactured and exported by JCO Fabrics.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: fabrics.join(", ") }],
    structuredContent: { fabrics },
  }),
});
