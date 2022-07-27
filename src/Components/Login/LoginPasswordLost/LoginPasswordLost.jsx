import React from "react";
import { PASSWORD_LOST } from "../../../api";
import Button from "../../Form/Button/Button";
import Input from "../../Form/Input/Input";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Recuperar conta" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar email</Button>}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
