import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createWeatherServer } from "./server.js";
export async function runServer() {
    const server = createWeatherServer();
    const transport = new StdioServerTransport();
    try {
        await server.connect(transport);
        console.error("✅ Weather MCP Server is running via stdio.");
    }
    catch (error) {
        console.error("❌ Failed to start Weather MCP Server:", error);
        process.exit(1);
    }
}
runServer();
