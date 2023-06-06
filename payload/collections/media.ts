import { CollectionConfig } from 'payload/types';
import path from 'path';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, ''),
    adminThumbnail: ({ doc }) =>
      `${doc.url}`,
  },
  
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    
  ]
  
}