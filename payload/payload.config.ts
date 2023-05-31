import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./collections/users";
import { Projects } from "./collections/projects";

export default buildConfig({
  collections: [Users, Projects],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
