import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  emails: ["jcofabrics@yahoo.co.in", "manan.jcofabrics@gmail.com"],
  phone: "+91 9891542727",
  website: "https://jcofabrics.com",
  instagram: "https://instagram.com/jankinathandco",
  linkedin:
    "https://www.linkedin.com/in/manan-bhasin-6a9214417",
  threads: "https://www.threads.com/@jankinathandco",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description: "Return JCO Fabrics contact details — emails, phone, website, and social profiles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
