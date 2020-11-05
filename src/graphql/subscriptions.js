/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTopicTag = /* GraphQL */ `
  subscription OnCreateTopicTag {
    onCreateTopicTag {
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
export const onUpdateTopicTag = /* GraphQL */ `
  subscription OnUpdateTopicTag {
    onUpdateTopicTag {
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
export const onDeleteTopicTag = /* GraphQL */ `
  subscription OnDeleteTopicTag {
    onDeleteTopicTag {
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
