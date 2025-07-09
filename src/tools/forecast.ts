import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { makeNWSRequest } from "../utils/nws.js";
import type { ForecastResponse, PointsResponse } from "../utils/nws.js";

export function registerForecastTool(server: McpServer): void {
  server.tool(
    "get-forecast",
    "Get weather forecast for a location",
    {
      latitude: z
        .number()
        .min(-90)
        .max(90)
        .describe("Latitude of the location"),
      longitude: z
        .number()
        .min(-180)
        .max(180)
        .describe("Longitude of the location"),
    },
    async ({ latitude, longitude }) => {
      const pointsUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
      const pointData = await makeNWSRequest<PointsResponse>(pointsUrl);

      const forecastUrl = pointData?.properties?.forecast;
      if (!forecastUrl) {
        return {
          content: [
            { type: "text", text: "No forecast URL found for location." },
          ],
        };
      }

      const forecastData = await makeNWSRequest<ForecastResponse>(forecastUrl);
      const periods = forecastData?.properties?.periods || [];

      if (periods.length === 0) {
        return {
          content: [{ type: "text", text: "No forecast available." }],
        };
      }

      const forecast = periods
        .map(
          (p) =>
            `${p.name}\nTemp: ${p.temperature}°${p.temperatureUnit}\nWind: ${p.windSpeed} ${p.windDirection}\n${p.shortForecast}\n---`
        )
        .join("\n");

      return {
        content: [{ type: "text", text: forecast }],
      };
    }
  );
}
