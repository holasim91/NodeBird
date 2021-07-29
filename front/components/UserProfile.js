import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
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
        <Card.Meta avatar={<Avatar>{me?.nickname[0]}</Avatar>} title="숑이" />
      </Card>
      <Button onClick={onLogOut} loading={isLoggingOut}>
        로그아웃
      </Button>
    </div>
  );
};

export default UserProfile;
