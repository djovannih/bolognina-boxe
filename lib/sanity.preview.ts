import { definePreview } from 'next-sanity/preview'

import { dataset, projectId } from './sanity.api'

let alerted = false
export const usePreview = definePreview({
  projectId: projectId!,
  dataset: dataset!,
  onPublicAccessOnly: () => {
    if (!alerted) {
      alert('You are not logged in. You will only see public data.')
      alerted = true
    }
  },
})
