import { gql } from "graphql-request";

export const GetAppsDocument = gql`
  query Apps {
    apps {
      id
      name
      description
      slug
      cover {
        url
        width
        height
      }
    }
  }
`;

export const GetAppDocument = gql`
  query App($slug: String!) {
    app(where: { slug: $slug }, stage: PUBLISHED, locales: [en]) {
      id
      name
      description
      slug
      cover {
        url
        width
        height
      }
    }
  }
`;
