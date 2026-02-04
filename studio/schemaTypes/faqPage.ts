import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'blockContentInputWithLanguageOptions',
    }),
    defineField({
      name: 'col2Questions',
      title: 'Column 2 Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'blockContentInputWithLanguageOptions',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'col3Questions',
      title: 'Column 3 Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'blockContentInputWithLanguageOptions',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'submissionsFAQHeader',
      title: 'Submissions FAQ Header',
      type: 'stringInputWithLanguageOptions',
    }),
    defineField({
      name: 'submissionsCol2Questions',
      title: 'Submissions Column 2 Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'blockContentInputWithLanguageOptions',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'submissionsCol3Questions',
      title: 'Submissions Column 3 Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'blockContentInputWithLanguageOptions',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'privacyPolicyHeader',
      title: 'Privacy Policy Header',
      type: 'stringInputWithLanguageOptions',
    }),
    defineField({
      name: 'privacyPolicyCol2',
      title: 'Privacy Policy Column 2',
      type: 'blockContentInputWithLanguageOptions',
    }),
    defineField({
      name: 'privacyPolicyCol3',
      title: 'Privacy Policy Column 3',
      type: 'blockContentInputWithLanguageOptions',
    }),
  ],
})
