import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
  cache: new InMemoryCache(),
});

export const GET_USER_PHOTO = gql`
  query GetUserPhoto {
    userPicture
  }
`;

export const GET_FAVORITE_BOOKS = gql`
  query GetFavoriteBook {
    favoriteBooks {
      id
      name
      cover
      author {
        name
      }
    }
  }
`;
