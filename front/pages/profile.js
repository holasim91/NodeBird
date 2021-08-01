import Router from 'next/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NickEditForm from '../components/NickEditForm';

const profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!me?.id) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NickEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default profile;
