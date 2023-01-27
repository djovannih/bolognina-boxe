import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'

const dev = process.env.VERCEL_ENV === 'development'
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

// @TODO report top-level await bug
// Using a dynamic import here as `loadEnvConfig` needs to run before this file is loaded
// const { projectId, dataset } = await import('lib/sanity.api')
const projectId = process.env.SANITY_API_PROJECT_ID
const dataset = process.env.SANITY_API_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
