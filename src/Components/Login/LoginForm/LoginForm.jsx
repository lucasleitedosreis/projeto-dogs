import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../userContext";
import Button from "../../Form/Button/Button";
import Input from "../../Form/Input/Input";
import Error from "../../Helper/Error/Error";
import useForm from "../../Hooks/useForm";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../Form/Button/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error && "Dados incorretos - verifique o usuário e a senha."} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/loginCreate">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
