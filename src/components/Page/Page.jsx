import { Link } from "react-router-dom";
import css from "./Page.module.css";
import back from "data/images/interacting-icons/back1.png";

export const Page = ({ children, linkBack, pageName }) => {
  return (
    <div className={css.Container}>
      <header>
        <Link to={linkBack}>
          <img src={back} style={{ width: 20 }} alt=""></img>
        </Link>
        <h1>{pageName}</h1>
      </header>
      {children}
    </div>
  );
};
