import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    description: 'Hier werden die Geschichten verwaltet',
    defaultColumns: ['title', 'content', 'pub_date', 'storyteller', '_status'],
    pagination: {
      limits: [10, 20, 50, 100],
    },
  },
  defaultSort: '-title',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Main', // required
          description: 'Edit content here',
          fields: [
            {
              name: 'main_image',
              label: 'Main Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'content',
              label: 'Content',
              type: 'richText',
              localized: true,
            },
          ],
        },
        {
          label: 'Meta',
          description: 'Edit meta data here',
          fields: [
            {
              name: 'storyteller',
              label: 'Storyteller',
              type: 'relationship',
              relationTo: 'users',
              required: true,
            },
            {
              name: 'storywriter',
              label: 'Storywriter',
              type: 'relationship',
              relationTo: 'users',
              required: true,
            },
            {
              name: 'interview_language',
              label: 'Interview Language',
              type: 'text',
            },
            {
              name: 'interview_place',
              label: 'Interview Place',
              type: 'text',
            },
            {
              name: 'country',
              type: 'text',
              admin: {
                components: {
                  Field: '/components/SelectCountry.tsx#SelectCountry',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'URL of the story: yyyy-mm-dd-title',
      },
    },
    {
      name: 'pub_date',
      label: 'Publication Date',
      type: 'date',
      required: true,
      admin: {
        date: {
          displayFormat: 'd. MMMM yyyy',
        },
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: {
      // // Uncomment to enable autosave for drafts
      // autosave: {
      //     interval: 800, // In milliseconds
      // },
    },
    maxPerDoc: 10,
  },
}
