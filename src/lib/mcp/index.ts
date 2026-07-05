import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listFabrics from "./tools/list-fabrics";
import listCertifications from "./tools/list-certifications";
import listWeavingUnits from "./tools/list-weaving-units";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "jco-fabrics-mcp",
  title: "JCO Fabrics MCP",
  version: "0.1.0",
  instructions:
    "Tools for querying public information about Janki Nath & Co. (JCO Fabrics) — company overview, fabric categories, certifications, weaving unit locations, and contact details.",
  tools: [getCompanyInfo, listFabrics, listCertifications, listWeavingUnits, getContact],
});
