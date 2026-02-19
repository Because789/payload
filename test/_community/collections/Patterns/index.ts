import type { CollectionConfig } from 'payload'

export const Patterns: CollectionConfig = {
  slug: 'patterns',
  admin: { useAsTitle: 'name' },
  fields: [{ name: 'name', type: 'text' }],
}
