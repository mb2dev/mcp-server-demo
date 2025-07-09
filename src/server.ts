import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerAlertsTool } from "./tools/alert.js";
import { registerForecastTool } from "./tools/forecast.js";

export function createWeatherServer() {
  const server = new McpServer({
    name: "weaher",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  registerAlertsTool(server);
  registerForecastTool(server);

  return server;
}
