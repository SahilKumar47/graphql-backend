import React from "react";
import { useQuery, gql } from "@apollo/react-hooks";

import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

function Home() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
      }
    }
  }
`;

export default Home;
