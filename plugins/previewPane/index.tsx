import { DefaultDocumentNodeResolver } from 'sanity/desk'

import authorType from '../../schemas/card'
import postType from '../../schemas/homepage'
import PostPreviewPane from './PostPreviewPane'

export const previewDocumentNode = ({
  apiVersion,
  previewSecretId,
}: {
  apiVersion: string
  previewSecretId: `${string}.${string}`
}): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case authorType.name:
        return S.document().views([
          S.view.form(),
          S.view.component(({ document }) => <></>).title('Preview'),
        ])

      case postType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <PostPreviewPane
                slug={document.displayed.slug?.current}
                apiVersion={apiVersion}
                previewSecretId={previewSecretId}
              />
            ))
            .title('Preview'),
        ])

      default:
        return null
    }
  }
}
