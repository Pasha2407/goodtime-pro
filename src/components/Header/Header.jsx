import { Link } from "react-router-dom";
import css from "./Header.module.css";
import back from "data/images/interacting-icons/back1.png";
export const Header = ({ linkBack, pageName }) => {
  return (
    <header className={css.Container}>
      <Link to={linkBack}>
        <img src={back} style={{ width: 20 }} alt=""></img>
      </Link>
      <h1>{pageName}</h1>
    </header>
  );
};
