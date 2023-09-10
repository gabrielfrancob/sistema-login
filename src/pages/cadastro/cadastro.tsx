import { useState } from "react";
import Button from "../../components/Form/Button/button";
import FormCard from "../../components/Form/FormCard/form-card";
import Input from "../../components/Form/Input/input";
import { Link } from "react-router-dom";

type CadastroModel = {
  username: string;
  password: string;
};

export default function Cadastro() {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const handleUserChange = (username: string) => {
    setUsuario(username);
  };

  const handleSenhaChange = (senha: string) => {
    setSenha(senha);
  };

  const handleConfirmarSenhaChange = (senha: string) => {
    setConfirmarSenha(senha);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    let form: CadastroModel = { username: usuario, password: senha };
    if (form.password != confirmarSenha) {
      console.log("CONFIRME SUA SENHA");
    } else {
      console.log(form);
    }
  };

  return (
    <FormCard cardTitle="Cadastrar">
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
      <Input
        label="Confirme sua senha"
        placeholder="Sua senha"
        type="password"
        onTextChange={handleConfirmarSenhaChange}
      />
      <Button value="Cadastrar-se" onSubmitEvent={handleOnSubmit} />
      <p className="accent" style={{ textAlign: "center" }}>
        Já possui conta?
        <Link to={"/login"}>
          <a
            href="#"
            target="_blank"
            className="primary"
            style={{ textDecoration: "none" }}
          >
            Faça login!
          </a>
        </Link>
      </p>
    </FormCard>
  );
}
