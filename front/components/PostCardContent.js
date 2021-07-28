import React from "react";
import Link from "next/link";
const PostCardContent = ({ postData }) => {
  return (
    <>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link key={i} href={`/hashtag/${v.slice(1)}`}>
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </>
  );
};

export default PostCardContent;
