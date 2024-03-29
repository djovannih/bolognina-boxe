/**
 * This config is used to set up Sanity Studio that's mounted on the `/app/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from './lib/sanity.api'
import { previewDocumentNode } from './plugins/previewPane'
import { productionUrl } from './plugins/productionUrl'
import cardType from './schemas/card'
import homepageType from './schemas/homepage'
import menuType from './schemas/menu'
import pageType from './schemas/page'
import staffType from './schemas/staff'
import youTubeType from './schemas/youtube'

const title = import.meta.env.SANITY_STUDIO_PROJECT_TITLE || 'Bolognina boxe'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId!,
  dataset: dataset!,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [cardType, staffType, homepageType, pageType, menuType, youTubeType],
  },
  plugins: [
    deskTool({
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [homepageType.name, menuType.name, pageType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
