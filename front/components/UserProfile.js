import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logoutLoading } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <div>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {me.Post.length}
          </div>,
          <div key="followings">
            팔로잉
            <br />
            {me.Followings.length}
          </div>,
          <div key="followers">
            팔로워
            <br />
            {me.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>{me?.nickname[0]}</Avatar>} title="숑이" />
      </Card>
      <Button onClick={onLogOut} loading={logoutLoading}>
        로그아웃
      </Button>
    </div>
  );
};

export default UserProfile;
