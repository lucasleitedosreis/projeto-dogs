import React, { useContext } from "react";
import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../userContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";

const LoginCreate = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) await userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <Head title="Criar conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
