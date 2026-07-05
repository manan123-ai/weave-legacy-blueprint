import { defineTool } from "@lovable.dev/mcp-js";

const info = {
  name: "Janki Nath & Co. (JCO Fabrics)",
  founded: 1968,
  headOffice: "Mayapuri, New Delhi, India",
  description:
    "Premium woven fabric manufacturer and exporter since 1968, supplying cotton, linen, jacquard, viscose, twill, yarn-dyed and specialty fabrics to global brands across 20+ countries.",
  monthlyCapacityMeters: 2_000_000,
  leadTimeDays: "15-30",
  msmeRegistered: true,
  website: "https://jcofabrics.com",
};

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return high-level information about Janki Nath & Co. (JCO Fabrics) — founding year, head office, capacity, lead times.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
    structuredContent: info,
  }),
});
