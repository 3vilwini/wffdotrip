import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {DocumentIcon} from '@sanity/icons'
import {CogIcon} from '@sanity/icons'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['formPage', 'siteMetadata', 'indexPage', 'faqPage'])

export default defineConfig({
  name: 'default',
  title: 'wffdotrip',

  projectId: '0zhfa4cq',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Metadata')
              .id('siteMetadata')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteMetadata')
                  .documentId('siteMetadata')
                  .title('Site Metadata'),
              ),
            S.divider(),
            S.listItem()
              .title('Form Page')
              .id('formPage')
              .icon(DocumentIcon)
              .child(S.document().schemaType('formPage').documentId('formPage').title('Form Page')),
            S.listItem()
              .title('Index Page')
              .id('indexPage')
              .icon(DocumentIcon)
              .child(
                S.document().schemaType('indexPage').documentId('indexPage').title('Index Page'),
              ),
            S.listItem()
              .title('FAQ Page')
              .id('faqPage')
              .icon(DocumentIcon)
              .child(S.document().schemaType('faqPage').documentId('faqPage').title('FAQ Page')),
            S.listItem()
              .title('Cost Page')
              .id('costPage')
              .icon(DocumentIcon)
              .child(S.document().schemaType('costPage').documentId('costPage').title('Cost Page')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
