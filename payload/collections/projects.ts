import { CollectionConfig } from "payload/types";

export const Projects: CollectionConfig = {
  slug: "projects",
  auth: false,
  admin: {
    useAsTitle: "projectName",
  },
  fields: [
    {
      name: "projectName",
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
          label: "Project Details",
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
              name: "video",
              label: "Youtube Video Link",
              type: "text",
							validate: ((value: string) => {
							if (value == undefined || value.length == 0) return true;
							if ((/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g).test(value)) true
							return "Not a valid youtube link (try adding https?)"

						})
            },
            {
              name: "fullDescription",
              type: "richText",
              label: "Full Length Description",
            },
          ],
        },
        {
          label: "Graphics",
          fields: [
            {
              name: "banner",
              type: "text",
              //relationTo: 'media'
            },
            {
              name: "infographics",
              type: "array",
              maxRows: 6,
              labels: {
                singular: "Infograpic",
                plural: "Infographics",
              },
              fields: [
                {
                  name: "infographics",
                  type: "text",
                  //relationTo: 'media'
                },
              ],
            },
          ],
        },
        {
          label: "Team Members",
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
