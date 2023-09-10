import { Link } from "react-router-dom";
import Button from "../../components/Form/Button/button";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home_page}>
      <h1 className="secondary">O que deseja fazer?</h1>
      <Link to={"login"}>
        <Button value="Fazer login" />
      </Link>
      <Link to={"cadastro"}>
        <Button value="Fazer cadastro" />
      </Link>
      <Link to={"/"}>
        <Button value="Listar usuários" disabled />
      </Link>
    </div>
  );
}
