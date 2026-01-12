export const schemaTypes = []
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stringInputWithLanguageOptions',
  title: 'stringInputWithLanguageOptions',
  type: 'document',
  fields: [
    defineField({name: 'EN', title: 'EN', type: 'string'}),
    defineField({name: 'FR', title: 'FR', type: 'string'}),
    defineField({name: 'IT', title: 'IT', type: 'string'}),
    defineField({name: 'ES', title: 'ES', type: 'string'}),
  ],
})
