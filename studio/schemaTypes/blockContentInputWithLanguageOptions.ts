import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blockContentInputWithLanguageOptions',
  title: 'blockContentInputWithLanguageOptions',
  type: 'document',
  fields: [
    defineField({name: 'EN', title: 'EN', type: 'blockContent'}),
    defineField({name: 'FR', title: 'FR', type: 'blockContent'}),
    defineField({name: 'IT', title: 'IT', type: 'blockContent'}),
    defineField({name: 'ES', title: 'ES', type: 'blockContent'}),
  ],
})
