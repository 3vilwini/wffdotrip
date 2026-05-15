import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'costPage',
  title: 'Cost Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionOne',
      title: 'Section One',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'blockContentInputWithLanguageOptions',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sectionTwo',
      title: 'Section Two',
      type: 'blockContentInputWithLanguageOptions',
    }),
    defineField({
      name: 'sectionThree',
      title: 'Section Three',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'stringInputWithLanguageOptions',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'blockContentInputWithLanguageOptions',
            }),
            defineField({
              type: 'array',
              name: 'sponsors',
              title: 'Sponsors',
              of: [
                defineField({
                  type: 'stringInputWithLanguageOptions',
                  name: 'sponsor',
                  title: 'Sponsor',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
