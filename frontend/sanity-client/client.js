import sanityClient from "@sanity/client";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const TOKEN = process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN;
console.log("This is Project ID -> ", PROJECT_ID)
console.log("This is Project Token -> ", TOKEN)

export const client = sanityClient({
  projectId: PROJECT_ID,
  dataset: 'production',
  apiVersion: 'v1',
  token: TOKEN,
  useCdn: false,
});
