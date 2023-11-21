import { Link } from "react-router-dom";
import css from "./ListItem.module.css";

export const ListItem = ({ color, link, name }) => {
  return (
    <nav className={css.Item} style={{ backgroundColor: color }}>
      <Link to={link}>{name}</Link>
    </nav>
  );
};
