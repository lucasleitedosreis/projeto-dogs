import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { COMMENT_POST } from "../../../api";
import Error from "../../Helper/Error/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(envent) {
    envent.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, token, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <form className={`${styles.form} ${single ? styles.single : ""}`} onSubmit={handleSubmit}>
      <textarea className={styles.textarea} id={comment} name={comment} placeholder="Comente..." value={comment} onChange={({ target }) => setComment(target.value)} />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
