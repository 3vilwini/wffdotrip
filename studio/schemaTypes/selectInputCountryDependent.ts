import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'selectInputCountryDependent',
  title: 'selectInputCountryDependent',
  type: 'document',
  fields: [
    defineField({name: 'EN', title: 'EN', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'FR', title: 'FR', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'IT', title: 'IT', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'NL', title: 'NL', type: 'array', of: [{type: 'string'}]}),
  ],
})
