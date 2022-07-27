import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";
import styles from "./Login.module.css";
import NotFound from "../NotFound/NotFound";
import Head from "../Helper/Head/Head";
const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;

  return (
    <section className={styles.login}>
      <Head title="Login" description="Página de login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="loginCreate" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
