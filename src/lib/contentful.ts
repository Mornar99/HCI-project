const NEWS_GRAPHQL_FIELDS = `
  sys { id }
  title
  publishedDate
  content 
  image {
    url
  }
`;

async function fetchGraphQL(
  query: string,
  preview: boolean = false
): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getNewsPosts(isDraftMode = false) {
  const query = `
    query {
      newsPostCollection(order: publishedDate_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${NEWS_GRAPHQL_FIELDS}
        }
      }
    }
  `;

  const response = await fetchGraphQL(query, isDraftMode);
  console.log("Contentful Response:", JSON.stringify(response, null, 2)); // Debugging

  return response?.data?.newsPostCollection?.items || [];
}
