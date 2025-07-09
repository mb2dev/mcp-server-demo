export async function makeNWSRequest(url) {
    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "weather-mcp/1.0",
                Accept: "application/geo+json",
            },
        });
        if (!response.ok)
            throw new Error(`HTTP error ${response.status}`);
        return await response.json();
    }
    catch (err) {
        console.error("NWS request failed:", err);
        return null;
    }
}
