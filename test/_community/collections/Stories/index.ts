import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',
  admin: { useAsTitle: 'number' },
  fields: [{ name: 'number', type: 'number' }],
}
