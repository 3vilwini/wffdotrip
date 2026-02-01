import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'formPage',
  title: 'Form Page',
  type: 'document',
  groups: [
    {
      name: 'formIntro',
      title: 'Form Header',
    },
    {
      name: 'whereWhen',
      title: 'Where & When',
    },
    {
      name: 'employer',
      title: 'Employer Info',
    },
    {
      name: 'terms',
      title: 'Terms',
    },
    {
      name: 'job',
      title: 'Job Info',
    },
    {
      name: 'compensation',
      title: 'Compensation Info',
    },
    {
      name: 'sentiment',
      title: 'Sentiment Info',
    },
    {
      name: 'addl',
      title: 'Additional Info',
    },
    {
      name: 'artist',
      title: 'Artist Residency Questions',
    },
    {
      name: 'formFooter',
      title: 'Form Footer',
    },
  ],
  fields: [
    defineField({
      name: 'Title',
      title: 'title',
      type: 'string',
      hidden: true,
    }),

    //////Form Intro//////

    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'stringInputWithLanguageOptions',
      group: 'formIntro',
    }),
    defineField({
      name: 'editFormTitle',
      title: 'Edit Form Title',
      type: 'stringInputWithLanguageOptions',
      group: 'formIntro',
    }),
    defineField({
      name: 'formIntro',
      title: 'Form Intro',
      type: 'blockContentInputWithLanguageOptions',
      group: 'formIntro',
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'textInputWithLanguageOptions',
      group: 'formIntro',
    }),

    //////WHERE AND WHEN//////

    defineField({
      name: 'whereWhenSectionTitle',
      title: 'Where and When Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'whereWhen',
    }),
    defineField({
      name: 'whereWhenHelpText',
      title: 'Where and When Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'whereWhen',
    }),
    // defineField({
    //   name: 'countryLabel',
    //   title: 'Country Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'whereWhen',
    // }),
    // defineField({
    //   name: 'countryOptions',
    //   title: 'Country Options',
    //   type: 'object',
    //   group: 'whereWhen',
    //   fields: [
    //     defineField({
    //       name: 'france',
    //       title: 'France',
    //       type: 'stringInputWithLanguageOptions',
    //     }),
    //     defineField({
    //       name: 'italy',
    //       title: 'Italy',
    //       type: 'stringInputWithLanguageOptions',
    //     }),
    //     defineField({
    //       name: 'uk',
    //       title: 'UK',
    //       type: 'stringInputWithLanguageOptions',
    //     }),
    //     defineField({
    //       name: 'spain',
    //       title: 'Spain',
    //       type: 'stringInputWithLanguageOptions',
    //     }),
    //   ],
    // }),
    // defineField({
    //   name: 'cityLabel',
    //   title: 'City Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'whereWhen',
    // }),
    // defineField({
    //   name: 'yearLabel',
    //   title: 'Year Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'whereWhen',
    // }),

    //////EMPLOYER//////

    defineField({
      name: 'employerSectionTitle',
      title: 'Employer Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'employer',
    }),
    defineField({
      name: 'employerHelpText',
      title: 'Employer Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'employer',
    }),
    // defineField({
    //   name: 'employerTypeLabel',
    //   title: 'Employer Type Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'employer',
    // }),
    // defineField({
    //   name: 'employerTypeOptions',
    //   title: 'Employer Type Field Label',
    //   type: 'employerTypeOptions',
    //   group: 'employer',
    // }),
    // defineField({
    //   name: 'employerNameLabel',
    //   title: 'Employer Name Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'employer',
    // }),
    // defineField({
    //   name: 'numEmployeesLabel',
    //   title: '# of Employees Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'employer',
    // }),

    //////TERMS//////

    defineField({
      name: 'termsSectionTitle',
      title: 'Terms Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'terms',
    }),
    defineField({
      name: 'termsHelpText',
      title: 'Terms Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'terms',
    }),
    // defineField({
    //   name: 'contractTypeLabel',
    //   title: 'Contract Type Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'terms',
    // }),
    // defineField({
    //   name: 'contractTypeOptions',
    //   title: 'Contract Type Options',
    //   type: 'selectInputWithLanguageOptions',
    //   group: 'terms',
    // }),
    // defineField({
    //   name: 'workerStatusLabel',
    //   title: 'Worker Status Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'terms',
    // }),
    // defineField({
    //   name: 'workerStatusOptions',
    //   title: 'Worker Status Options',
    //   type: 'selectInputCountryDependent',
    //   group: 'terms',
    // }),
    // defineField({
    //   name: 'contractLengthLabel',
    //   title: 'Contract Length Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'terms',
    // }),
    // defineField({
    //   name: 'numHoursLabel',
    //   title: '# of Hours Field Label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'terms',
    // }),

    //////JOB//////

    defineField({
      name: 'jobSectionTitle',
      title: 'Job Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'job',
    }),
    defineField({
      name: 'jobHelpText',
      title: 'Job Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'job',
    }),
    // defineField({
    //   name: 'workerCategoryLabel',
    //   title: 'Worker Category Field label',
    //   type: 'workerCategoryOptions',
    //   group: 'job',
    // }),
    // defineField({
    //   name: 'jobTitleLabel',
    //   title: 'Job Title Field label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'job',
    // }),
    // defineField({
    //   name: 'jobDetailsLabel',
    //   title: 'Job Details Field label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'job',
    // }),
    // defineField({
    //   name: 'experienceLabel',
    //   title: 'Experience Field label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'job',
    // }),
    // defineField({
    //   name: 'jobObtainedViaLabel',
    //   title: 'Job Obtained Via Field label',
    //   type: 'stringInputWithLanguageOptions',
    //   group: 'job',
    // }),
    // defineField({
    //   name: 'jobObtainedViaOptions',
    //   title: 'Job Obtained Via Options',
    //   type: 'selectInputWithLanguageOptions',
    //   group: 'job',
    // }),

    //////COMPENSATION//////

    defineField({
      name: 'compensationSectionTitle',
      title: 'Compensation Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'compensation',
    }),
    defineField({
      name: 'compensationHelpText',
      title: 'Compensation Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'compensation',
    }),

    //////SENTIMENT//////

    defineField({
      name: 'sentimentSectionTitle',
      title: 'Sentiment Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'sentiment',
    }),
    defineField({
      name: 'sentimentHelpText',
      title: 'Sentiment Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'sentiment',
    }),

    //////ADDITIONAL INFO//////

    defineField({
      name: 'addlSectionTitle',
      title: 'Additional Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'addl',
    }),
    defineField({
      name: 'addlSectionPlaceholder',
      title: 'Additonal Info Placeholder',
      type: 'stringInputWithLanguageOptions',
      group: 'addl',
    }),
    defineField({
      name: 'addlSectionHelpText',
      title: 'Additonal Info Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'addl',
    }),

    //////ARTIST QUESTIONS//////

    defineField({
      name: 'artistSectionTitle',
      title: 'Artist Residency Section Title',
      type: 'stringInputWithLanguageOptions',
      group: 'artist',
    }),
    defineField({
      name: 'artistSectionContent',
      title: 'Artist Residency Section Intro',
      type: 'blockContentInputWithLanguageOptions',
      group: 'artist',
    }),
    defineField({
      name: 'artistSectionHelpText',
      title: 'Artist Section Help Text',
      type: 'blockContentInputWithLanguageOptions',
      group: 'artist',
    }),
    defineField({
      name: 'showArtistQuestions',
      title: 'Show artist residency specific questions?',
      type: 'boolean',
      group: 'artist',
    }),
    defineField({
      name: 'artistQuestions',
      title: 'Artist Residency Specific Questions',
      type: 'artistResidencyQuestions',
      group: 'artist',
    }),

    defineField({
      name: 'footerDisclaimer',
      title: 'Disclaimer (end of form)',
      type: 'textInputWithLanguageOptions',
      group: 'formFooter',
    }),
    defineField({
      name: 'privacyLinkLabel',
      title: 'Privacy Link Label',
      type: 'stringInputWithLanguageOptions',
      group: 'formFooter',
    }),
  ],
})
