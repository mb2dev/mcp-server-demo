export async function makeNWSRequest<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "weather-mcp/1.0",
        Accept: "application/geo+json",
      },
    });

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("NWS request failed:", err);
    return null;
  }
}

// Types
export interface AlertFeature {
  properties: {
    event?: string;
    areaDesc?: string;
    severity?: string;
    status?: string;
    headline?: string;
  };
}

export interface AlertsResponse {
  features: AlertFeature[];
}

export interface PointsResponse {
  properties: {
    forecast?: string;
  };
}

export interface ForecastPeriod {
  name?: string;
  temperature?: number;
  temperatureUnit: string;
  windSpeed?: string;
  windDirection?: string;
  shortForecast?: string;
}

export interface ForecastResponse {
  properties: {
    periods: ForecastPeriod[];
  };
}
