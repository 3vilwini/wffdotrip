import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'selectInputWithLanguageOptions',
  title: 'selectInputWithLanguageOptions',
  type: 'document',
  fields: [
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'stringInputWithLanguageOptions'}],
    }),
  ],
})
