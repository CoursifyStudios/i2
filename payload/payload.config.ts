import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./collections/users";
import { Projects } from "./collections/projects";
import { Logo } from './branding';
import { Icon } from './branding';
import { Blogs } from "./collections/blog";

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- Innovation and Inquiry Program',
      favicon: '/assets/favicon.svg',
      ogImage: '/assets/logo.svg',
    },
    components: {
      graphics: {
        Logo,
        Icon
      },
    },
 },
  collections: [Users, Projects, Blogs],
  globals: [],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});

