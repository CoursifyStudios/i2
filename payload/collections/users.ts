import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "fullName",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
    },
    {
      name: "classYear",
      type: "number",
      validate: async (val, { operation }) => {
        if (val > 2000 && (val as number).toString().length == 4) return true;
        else return "Add a valid graduation year";
      },
    },
  ],
};
