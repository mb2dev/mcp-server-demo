import { z } from "zod";
import { makeNWSRequest } from "../utils/nws.js";
import { formatAlert } from "../utils/format.js";
export function registerAlertsTool(server) {
    const inputSchema = z.object({
        state: z.string().length(2).describe("Two-letter US state code (e.g. CA)"),
    });
    server.tool("get-alerts", "Get weather alerts for a US state", {
        state: z
            .string()
            .length(2)
            .describe("Two-letter state code (e.g. CA, NY)"),
    }, async ({ state }) => {
        const url = `https://api.weather.gov/alerts?area=${state.toUpperCase()}`;
        const data = await makeNWSRequest(url);
        if (!data || data.features.length === 0) {
            return {
                content: [{ type: "text", text: `No active alerts for ${state}` }],
            };
        }
        const alerts = data.features.map(formatAlert).join("\n");
        return {
            content: [{ type: "text", text: alerts }],
        };
    });
}
