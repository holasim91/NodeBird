import { Button, Form, Input } from "antd";
import React from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  });
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ position: "absolute", right: 0, bottom: -40 }}
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
