import { NewsPost, NewsPostCollectionResponse } from "../../public/types";

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
): Promise<NewsPostCollectionResponse> {
  const response = await fetch(
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
  );

  return response.json();
}

export async function getNewsPosts(isDraftMode = false): Promise<NewsPost[]> {
  const query = `
    query {
      newsPostCollection(order: publishedDate_DESC, preview: ${isDraftMode}) {
        items {
          ${NEWS_GRAPHQL_FIELDS}
        }
      }
    }
  `;

  const response: NewsPostCollectionResponse = await fetchGraphQL(
    query,
    isDraftMode
  );

  return response.data.newsPostCollection.items;
}
