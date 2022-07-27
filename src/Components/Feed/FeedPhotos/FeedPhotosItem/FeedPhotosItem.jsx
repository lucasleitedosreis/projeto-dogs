import React from "react";
import ImageSkeleton from "../../../Helper/ImageSkeleton/ImageSkeleton";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span className={styles.viewDetailsPhoto}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
