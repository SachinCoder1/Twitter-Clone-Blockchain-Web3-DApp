export const tweetTypes = {
  name: "tweets",
  type: "document",
  title: "Tweets",
  fields: [
    {
      name: "tweet",
      title: "Tweet",
      type: "string",
    },
    {
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    },
    {
      name: "owner",
      title: "Owner",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
