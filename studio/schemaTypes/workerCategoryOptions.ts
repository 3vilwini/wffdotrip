import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'workerCategoryOptions',
  title: 'workerCategoryOptions',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'sectionLabel.en',
            },
          },
          fields: [
            defineField({
              name: 'sectionLabel',
              title: 'Section Label',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  preview: {
                    select: {
                      title: 'optionLabel.en',
                    },
                  },
                  fields: [
                    defineField({
                      name: 'optionLabel',
                      title: 'Option',
                      type: 'stringInputWithLanguageOptions',
                    }),
                    defineField({
                      name: 'optionHelpText',
                      title: 'Option Help Text',
                      type: 'stringInputWithLanguageOptions',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
