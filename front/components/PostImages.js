import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import ImageZoom from "./ImageZoom";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  });
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  });
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation" //스크린 리더에서 클릭할 필요가 없는 이미지만 적어주자
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImageZoom image={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation" //스크린 리더에서 클릭할 필요가 없는 이미지만 적어주자
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImageZoom image={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <img
        role="presentation"
        style={{ width: "50%", display: "inline-block" }}
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div
        role="presentation"
        style={{
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}개의 사진 더보기
      </div>
      {showImagesZoom && <ImageZoom image={images} onClose={onClose} />}
    </>
  );
};

export default PostImages;
