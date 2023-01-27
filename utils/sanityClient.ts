import { createClient } from 'next-sanity'

export default createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  useCdn: process.env.VERCEL_ENV === 'production',
})
