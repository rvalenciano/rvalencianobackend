/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      title
      type
      description
      comments {
        nextToken
      }
      tags {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      title
      type
      description
      comments {
        nextToken
      }
      tags {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      title
      type
      description
      comments {
        nextToken
      }
      tags {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      tag
      topics {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      tag
      topics {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      tag
      topics {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      text
      topic {
        id
        title
        type
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      text
      topic {
        id
        title
        type
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      text
      topic {
        id
        title
        type
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTopicTag = /* GraphQL */ `
  mutation CreateTopicTag(
    $input: CreateTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    createTopicTag(input: $input, condition: $condition) {
      id
      topicId
      tagId
      topic {
        id
        title
        type
        description
        createdAt
        updatedAt
      }
      tag {
        id
        tag
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopicTag = /* GraphQL */ `
  mutation UpdateTopicTag(
    $input: UpdateTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    updateTopicTag(input: $input, condition: $condition) {
      id
      topicId
      tagId
      topic {
        id
        title
        type
        description
        createdAt
        updatedAt
      }
      tag {
        id
        tag
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopicTag = /* GraphQL */ `
  mutation DeleteTopicTag(
    $input: DeleteTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    deleteTopicTag(input: $input, condition: $condition) {
      id
      topicId
      tagId
      topic {
        id
        title
        type
        description
        createdAt
        updatedAt
      }
      tag {
        id
        tag
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
