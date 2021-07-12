import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NickEditForm from "../components/NickEditForm";

const profile = () => {
  const followerList = [
    { nickname: "감자" },
    { nickname: "양파" },
    { nickname: "버섯" },
  ];
  const followingList = [
    { nickname: "감자" },
    { nickname: "양파" },
    { nickname: "버섯" },
  ];
  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NickEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default profile;
