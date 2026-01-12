import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'artistResidencyQuestions',
  title: 'artistResidencyQuestions',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'questionLabel',
              title: 'Question',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'dbFieldName',
              title: 'Column Name in Baserow',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
