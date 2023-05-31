import { CollectionConfig } from "payload/types";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  auth: false,
  admin: {
    useAsTitle: "blogName",
  },
  fields: [
    {
      name: "blogName",
      type: "text",
      validate: async (val, { operation }) => {
        if (typeof val != "string") return "Value needs to be a string";
        if (val.length > 3 && val.length < 15) return true;
        else return "Project name needs to be between 3 and 15 charachters";
      },
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Details",
					description: "The content of your blog post",
          fields: [
            {
              name: "shortDescription",
              type: "text",
              validate: async (val, { operation }) => {
                if (typeof val != "string") return "Value needs to be a string";
                if (val.length > 10 && val.length <= 110) return true;
                else
                  return "Short description needs to be between 10 and 110 characters";
              },
              required: true,
            },
            {
              name: "postContent",
              type: "richText",
            },
          ],
        },
        {
          label: "Writers",
					description: "The writers of this blog post. Make sure to add yourself!",
          fields: [
            {
              name: "projectTeam",
              type: "array",
              minRows: 1,
              maxRows: 6,
              labels: {
                singular: "Member",
                plural: "Members",
              },
              // validate: async (val: Partial<{_id: string}>[] | undefined) => {
              // 	if (val == undefined) return "/shrug";
              // 	console.log(val)
              // 	if (hasDuplicates(val)) return "You have duplicate members in your team"
              // 	return true
              // },
              fields: [
                {
                  name: "users",
                  type: "relationship",
                  relationTo: "users",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function hasDuplicates(arr: Partial<{ _id: string }>[]): boolean {
  const uniqueIds: Set<string> = new Set();
  for (const obj of arr) {
    if (obj._id && uniqueIds.has(obj._id)) {
      return true;
    }
    if (obj._id) {
      uniqueIds.add(obj._id);
    }
  }
  return false;
}
