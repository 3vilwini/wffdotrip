import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'indexPage',
  title: 'Index Page',
  type: 'document',
  fields: [
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'blockContentInputWithLanguageOptions',
    }),
    defineField({
      name: 'representedCountriesHeader',
      title: 'Represented Countries Header',
      type: 'stringInputWithLanguageOptions',
    }),
    defineField({
      name: 'representedCountriesDescription',
      title: 'Represented Countries Description',
      type: 'blockContentInputWithLanguageOptions',
    }),
    defineField({
      name: 'getInvolvedHeader',
      title: 'Get Involved Header',
      type: 'stringInputWithLanguageOptions',
    }),
    defineField({
      name: 'getInvolvedDescription',
      title: 'Get Involved Description',
      type: 'blockContentInputWithLanguageOptions',
    }),
  ],
})
