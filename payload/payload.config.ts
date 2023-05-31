import path from 'path';
import { buildConfig } from 'payload/config';
import { Users } from './collections/users';

export default buildConfig({
  collections: [
    Users
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
