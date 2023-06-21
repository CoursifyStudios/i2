import { CollectionConfig } from 'payload/types';
import path from 'path';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'https://cdn.coursify.studio'   , 
    adminThumbnail: ({ doc }) =>
    `https://cdn.coursify.studio/i2-payload/${doc.filename}`,
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