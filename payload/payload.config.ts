import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./collections/users";
import { Projects } from "./collections/projects";
import { Logo } from "./branding";
import { Icon } from "./branding";
import { Blogs } from "./collections/blog";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { Media } from "./collections/media";

const adapter = s3Adapter({
	config: {
		endpoint: process.env.S3_ENDPOINT,
		region: process.env.S3_REGION,
		forcePathStyle: true,
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
		},
	},
	bucket: process.env.S3_BUCKET as string,
});

export default buildConfig({
	admin: {
		meta: {
			titleSuffix: "- Innovation and Inquiry Program",
			favicon: "/assets/icon.svg",
		},
		components: {
			graphics: {
				Logo,
				Icon,
			},
		},
	},
	plugins: [
		cloudStorage({
			collections: {
				media: {
					adapter,
					disablePayloadAccessControl: true,
				},
			},
		}),
	],
	collections: [Users, Projects, Blogs, Media],
	globals: [],
	typescript: {
		outputFile: path.resolve(__dirname, "../payload-types.ts"),
	},
});
