export const tweetTypes = {
  name: "tweets",
  title: "Tweets",
  type: "document",
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
