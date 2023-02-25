import { gql } from "@apollo/client";

export const ANIMI_DATA_QUERY = gql`
query getData {
    Page {
      media {
        siteUrl
        title {
          english
        }
        description
        coverImage {
          large
          color
        }
      }
    }
    Media {
      bannerImage
    }
  }
`

