import React, { useState, useEffect } from "react";
import UserHeaderNav from "../../UserHEaderNav/UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    switch (pathname) {
      case "/account/stats":
        setTitle("Estatísticas");
        break;
      case "/account/post":
        setTitle("Postar Fotos");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
