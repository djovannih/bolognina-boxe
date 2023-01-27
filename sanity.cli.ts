import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'

const dev = import.meta.env.PROD
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

// @TODO report top-level await bug
// Using a dynamic import here as `loadEnvConfig` needs to run before this file is loaded
// const { projectId, dataset } = await import('lib/sanity.api')
const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
