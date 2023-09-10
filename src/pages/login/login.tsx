import { useState } from "react";
import Button from "../../components/Form/Button/button";
import FormCard from "../../components/Form/FormCard/form-card";
import Input from "../../components/Form/Input/input";
import { Link } from "react-router-dom";

type LoginModel = {
  username: string;
  password: string;
};

export default function Login() {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleUserChange = (username: string) => {
    setUsuario(username);
  };

  const handleSenhaChange = (senha: string) => {
    setSenha(senha);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    let form: LoginModel = { username: usuario, password: senha };
    console.log(form);
  };

  return (
    <FormCard cardTitle="Login">
      <Input
        label="Usuário"
        placeholder="seuemail@email.com"
        type="text"
        onTextChange={handleUserChange}
      />
      <Input
        label="Senha"
        placeholder="Sua senha"
        type="password"
        onTextChange={handleSenhaChange}
      />
      <Button value="Entrar" onSubmitEvent={handleOnSubmit} />
      <p className="accent" style={{ textAlign: "center" }}>
        Não possui conta?
        <Link to={"/cadastro"}>
          <a
            href="#"
            target="_blank"
            className="primary"
            style={{ textDecoration: "none" }}
          >
            Cadastre-se!
          </a>
        </Link>
      </p>
    </FormCard>
  );
}
