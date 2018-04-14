// Build configuration constants

declare var process: { env: {
    ENV: string,
    API_URL: string
}};

export const DEPLOYMENT_MODE = process.env.ENV;
export const API_URL = process.env.API_URL;
