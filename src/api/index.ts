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

export const GET_FAVORITE_AUTHORS = gql`
  query GetFavoriteAuthor {
    favoriteAuthors {
      id
      name
      picture
      isFavorite
      books {
        id
      }
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    allBooks {
      id
      name
      author {
        name
      }
      cover
      isFavorite
    }
  }
`;
