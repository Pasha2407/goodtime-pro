import { Link } from "react-router-dom";
import css from "./ListItem.module.css";

export const ListItem = ({ color, link, name }) => {
  return (
    <nav style={{ backgroundColor: color }}>
      <Link className={css.link} to={link}>
        {name}
      </Link>
    </nav>
  );
};
