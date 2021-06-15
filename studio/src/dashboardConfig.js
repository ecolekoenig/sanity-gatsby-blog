export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c87ba7bc8363cc60941510",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-36jkfh6s",
                  apiId: "2e70c2d8-d4c5-441e-9484-400be0a44be7",
                },
                {
                  buildHookId: "60c87ba7a022d5e21e128812",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-mb2rpoet",
                  apiId: "921250bb-973b-485a-acae-aa575f5c4e53",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ecolekoenig/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-mb2rpoet.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
