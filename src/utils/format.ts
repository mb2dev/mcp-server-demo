import type { AlertFeature } from "./nws.js";

export function formatAlert(feature: AlertFeature): string {
  const p = feature.properties;
  return [
    `Event: ${p.event || "Unknown"}`,
    `Area: ${p.areaDesc || "Unknown"}`,
    `Severity: ${p.severity || "Unknown"}`,
    `Status: ${p.status || "Unknown"}`,
    `Headline: ${p.headline || "Unknown"}`,
    "---",
  ].join("\n");
}
