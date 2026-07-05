import { defineTool } from "@lovable.dev/mcp-js";

const units = ["Meerut", "Bhiwandi", "Ichalkaranji", "Erode", "Salem", "Surat"];
const headOffice = "Mayapuri, New Delhi";

export default defineTool({
  name: "list_weaving_units",
  title: "List weaving units",
  description: "List the Indian cities where JCO Fabrics operates weaving units, plus the head office.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `Weaving units: ${units.join(", ")}. Head Office: ${headOffice}.`,
      },
    ],
    structuredContent: { units, headOffice },
  }),
});
