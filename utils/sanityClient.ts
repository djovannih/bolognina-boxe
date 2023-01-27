import { createClient } from 'next-sanity'

export default createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: '2023-01-27',
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: process.env.VERCEL_ENV === 'production',
})
