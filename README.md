# Weather MCP Server

This project provides a Model Context Protocol (MCP) server for retrieving weather information. It offers two primary tools: fetching weather alerts for a specific US state and getting a detailed weather forecast for a given geographical location.

## Features

*   **Get Weather Alerts:** Retrieve active weather alerts from the National Weather Service (NWS) for any US state.
*   **Get Weather Forecast:** Obtain a detailed weather forecast for any location specified by latitude and longitude.

## Tools

### `get-alerts`

This tool retrieves weather alerts for a specified US state.

**Input:**

*   `state`: A two-letter US state code (e.g., "CA", "NY").

**Output:**

A formatted string containing the active weather alerts for the specified state, or a message indicating that there are no active alerts.

### `get-forecast`

This tool provides a weather forecast for a given latitude and longitude.

**Input:**

*   `latitude`: The latitude of the location.
*   `longitude`: The longitude of the location.

**Output:**

A formatted string containing the weather forecast, including temperature, wind speed and direction, and a short forecast for each period.

## Getting Started

### Prerequisites

*   Node.js
*   npm
*   Docker
*   Docker Compose

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Build the project:
    ```bash
    npm run build
    ```

### Running the Server

There are two ways to run the server:

#### Using `npm`

To start the Weather MCP Server, run the following command:

```bash
npm start
```

The server will then be running and ready to accept requests.

#### Using Docker Compose

This project includes a `docker-compose.yml` file that orchestrates the Weather MCP Server along with `ollama` and `openWebUI` services.

To run the services, use the following command:

```bash
docker-compose up -d
```

This will start the following services:

*   `ollama`: A service for running large language models.
*   `openWebUI`: A web-based user interface for interacting with language models.
*   `mcpo`: The Weather MCP Server, which will be accessible on port 9000.
