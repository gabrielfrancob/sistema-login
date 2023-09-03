import Button from "../../components/Form/button";
import FormCard from "../../components/Form/form-card";
import Input from "../../components/Form/input";

export default function LoginPage() {
  return (
    <FormCard cardTitle="Login">
      <Input label="Usuário" placeholder="seuemail@email.com" />
      <Input label="Senha" placeholder="Sua senha" />
      <Button value="Entrar" />
    </FormCard>
  );
}
