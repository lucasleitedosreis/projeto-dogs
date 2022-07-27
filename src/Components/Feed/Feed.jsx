import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";
import PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = true;
    function infinitScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = false;
          setTimeout(() => (wait = true), 500);
        }
      }
    }
    window.addEventListener("scroll", infinitScroll);
    window.addEventListener("wheel", infinitScroll);
    return () => {
      window.removeEventListener("scroll", infinitScroll);
      window.removeEventListener("wheel", infinitScroll);
    };
  }, [infinite]);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map((page) => (
        <FeedPhotos key={page} user={user} page={page} setInfinite={setInfinite} setModalPhoto={setModalPhoto} />
      ))}
    </div>
  );
};
Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
};

export default Feed;
