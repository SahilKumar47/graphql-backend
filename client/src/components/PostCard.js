import React from "react";
import moment from "moment";

import { Card, Icon, Label, Image } from "semantic-ui-react";

function PostCard({
  post: { body, createdAt, username, likeCount, commentCount, likes, id },
}) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Buttons</p>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
