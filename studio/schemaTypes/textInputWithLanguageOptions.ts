import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'textInputWithLanguageOptions',
  title: 'textInputWithLanguageOptions',
  type: 'document',
  fields: [
    defineField({name: 'EN', title: 'EN', type: 'text'}),
    defineField({name: 'FR', title: 'FR', type: 'text'}),
    defineField({name: 'IT', title: 'IT', type: 'text'}),
    defineField({name: 'NL', title: 'NL', type: 'text'}),
  ],
})
