import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import styled from "@emotion/styled";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        .ant-row {
          margin-right: 0 !important;
          margin-left: 0 !important;
        }

        .ant-col:first-child {
          padding-left: 0 !important;
        }

        .ant-col:last-child {
          padding-right: 0 !important;
        }
      `} // gutter로 인한 하단 스크롤 방지
    />
  );
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("지금 로그인 상태:", isLoggedIn);
  return (
    <>
      <GlobalStyles />
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* 로그인 창 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        {/* 내 정보 */}
        <Col xs={24} md={6}>
          <a href="">Made By HyuninSim</a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
