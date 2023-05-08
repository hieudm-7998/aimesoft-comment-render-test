/* eslint-disable react/prop-types */
import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

const CommentList = ({ comments }) => {
  const getComment = (comment) => {
    const { id, username, content, createdAt, replyingTo } = comment;
    const timeAgo = moment(createdAt).fromNow();

    if (replyingTo !== undefined) {
      return (
        <Comment.Group key={id}>
          <Comment>
            <Comment.Avatar
              src={`https://react.semantic-ui.com/images/avatar/small/joe.jpg`}
            />
            <Comment.Content>
              <Comment.Author as="a">{username}</Comment.Author>
              <Comment.Metadata>
                <div>{timeAgo}</div>
              </Comment.Metadata>
              <Comment.Text>{content.replace(/[0-9.]/g, "")}</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      );
    }

    return (
      <Comment key={id}>
        <Comment.Avatar
          src={`https://react.semantic-ui.com/images/avatar/small/joe.jpg`}
        />
        <Comment.Content>
          <Comment.Author as="a">{username}</Comment.Author>
          <Comment.Metadata>
            <div>{timeAgo}</div>
          </Comment.Metadata>
          <Comment.Text>{content.replace(/[0-9.]/g, "")}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  };

  const getReplies = (comment) => {
    const replies = comments.filter((c) => c.replyingTo === comment.id);

    if (replies.length === 0) {
      return null;
    }

    return (
      <Comment.Group
        key={`${comment.id}-replies`}
        style={{ paddingLeft: "2em" }}
      >
        {replies.map((reply) => getComment(reply))}
      </Comment.Group>
    );
  };

  return (
    <>
      <Comment.Group>
        {comments
          .filter((c) => c.replyingTo === undefined)
          .map((comment) => (
            <React.Fragment key={comment.id}>
              {getComment(comment)}
              {getReplies(comment)}
            </React.Fragment>
          ))}
      </Comment.Group>
    </>
  );
};

export default CommentList;
