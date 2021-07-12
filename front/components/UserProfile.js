import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <div>
      <Card
        actions={[
          <div key="twit">짹짹</div>,
          <div key="followings">
            팔로잉
            <br />@
          </div>,
          <div key="followers">
            팔로워
            <br />@
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>HI</Avatar>} title="숑이" />
      </Card>
      <Button onClick={onLogOut}>로그아웃</Button>
    </div>
  );
};

export default UserProfile;
