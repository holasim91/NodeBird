import { Button, Card, Popover } from "antd";
import React, { useCallback, useState } from "react";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const onToggleLike = useCallback(() => setLiked((prev) => !prev), []);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleComment = useCallback(
    () => setCommentFormOpened((prev) => !prev),
    []
  );

  const { me } = useSelector((state) => state.user);
  const id = me?.id;
  const { Images, User, content } = post;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card
        cover={Images[0] && <PostImages images={Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#EB2F96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="msg" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && User.id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{User.nickname[0]}</Avatar>}
          title={User.nickname}
          description={content}
        />
        <Button></Button>
      </Card>
      {commentFormOpened && <div>댓글!</div>}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

export default PostCard;
