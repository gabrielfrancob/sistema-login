import Button from "../../components/Form/Button/button";
import FormCard from "../../components/Form/FormCard/form-card";
import Input from "../../components/Form/Input/input";

export default function LoginPage() {
  return (
    <FormCard cardTitle="Login">
      <Input label="Usuário" placeholder="seuemail@email.com" />
      <Input label="Senha" placeholder="Sua senha" />
      <Button value="Entrar" />
      <p className="accent" style={{ textAlign: "center" }}>
        Não possui conta?
        <a
          href="#"
          target="_blank"
          className="primary"
          style={{ textDecoration: "none" }}
        >
          Cadastre-se!
        </a>
      </p>
    </FormCard>
  );
}
