import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../../api";
import Button from "../../Form/Button/Button";
import Input from "../../Form/Input/Input";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("");
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("login");
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Redefinir senha" />
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
