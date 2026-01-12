import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'employerTypeOptions',
  title: 'employerTypeOptions',
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
          fields: [
            defineField({
              name: 'title',
              title: 'Section Label',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [
                {
                  type: 'stringInputWithLanguageOptions',
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
