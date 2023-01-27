export const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
export const dataset = import.meta.env.SANITY_STUDIO_DATASET

export const apiVersion = import.meta.env.SANITY_STUDIO_API_VERSION

export const useCdn = typeof document !== 'undefined' && import.meta.env.PROD

export const previewSecretId: `${string}.${string}` = 'preview.secret'
