import { createClient } from 'next-sanity'

export default createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  useCdn: process.env.NODE_ENV === 'production',
})
