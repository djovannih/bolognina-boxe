import { dataset, projectId } from 'lib/sanity.api'
import { definePreview } from 'next-sanity/preview'

let alerted = false
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly: () => {
    if (!alerted) {
      alert('You are not logged in. You will only see public data.')
      alerted = true
    }
  },
})
