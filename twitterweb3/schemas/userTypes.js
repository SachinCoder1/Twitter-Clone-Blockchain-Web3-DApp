export const userTypes = {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "walletAddress",
      type: "string",
      title: "Wallet Address",
    },
    {
      name: "profileImage",
      type: "string",
      title: "Profile Image",
    },
    {
      name: "isProfileImageNft",
      type: "boolean",
      title: "is Profile Image Nft",
    },
    {
      name: "coverImage",
      type: "string",
      title: "Cover Image",
    },
    {
      name: "tweets",
      title: "Tweets",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tweets" }],
        },
      ],
    },
  ],
};
