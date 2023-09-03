/**
 * This function is required because in Vercel preview environment we must return the URL of the Vercel deployment
 * but in development and production the URL must not be the one of the Vercel deployment, but the stable domain we use
 */
export default function getBaseUrl(): string {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV as
    | "production"
    | "preview"
    | "development";
  if (vercelEnv === "preview") {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    return `${process.env.NEXT_PUBLIC_APP_URL}`;
  }
}
