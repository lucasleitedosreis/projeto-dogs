/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../userContext";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFotos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(null);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/account" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/account/stats">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/post">
          <AdicionarFotos />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
