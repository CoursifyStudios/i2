import { CollectionConfig } from 'payload/types';
import path from 'path';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'https://cdn.coursify.studio'
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ]
}