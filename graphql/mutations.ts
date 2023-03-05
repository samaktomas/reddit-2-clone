import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation addPostMutation(
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $title: String!
    $username: String!
  ) {
    insertPost(
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      title: $title
      username: $username
    ) {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addCommentMutation(
    $post_id: ID!
    $username: String!
    $text: String!
  ) {
    insertComment(post_id: $post_id, username: $username, text: $text) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

export const ADD_VOTE = gql`
  mutation addVoteMutation(
    $post_id: ID!
    $username: String!
    $upvote: Boolean!
  ) {
    insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation addSubReddit($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
