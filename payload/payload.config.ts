import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./collections/users";
import { Projects } from "./collections/projects";
import { Blogs } from "./collections/blog";

export default buildConfig({
	collections: [Users, Projects, Blogs],
	globals: [
		// Your globals here
	],
	typescript: {
		outputFile: path.resolve(__dirname, "../payload-types.ts"),
	},
});
