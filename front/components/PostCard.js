import { Button, Card, Popover, List, Comment } from 'antd';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/actions';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const onToggleLike = useCallback(() => setLiked((prev) => !prev), []);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleComment = useCallback(
    () => setCommentFormOpened((prev) => !prev),
    [],
  );

  const { me } = useSelector((state) => state.user);
  const id = me?.id;
  const { Images, User, content } = post;
  const { removePostLoading } = useSelector((state) => state.post);
  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  return (
    <div style={{ marginBottom: '20px' }}>
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
                    <Button
                      type="danger"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
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
          description={<PostCardContent postData={content} />}
        />
        <Button />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
  );
};
PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
