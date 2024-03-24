export default function getBaseHttpOption() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");
  return { headers: { Authorization: `Bearer ${token}` } };
}
