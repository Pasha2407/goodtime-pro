import { Link } from "react-router-dom";
import css from "./Home.module.css";
import headerImg from "data/images/home-icons/header.png";
import data from "data/json-data/home/home.json";

export const Home = () => {
  return (
    <div className={css.Container}>
      <header>
        <img src={headerImg} alt="Good Time"></img>
      </header>
      <nav>
        {data.map((item) => (
          <Link key={item.id} to={item.link}>
            <img
              src={require(`data/images/home-icons/${item.icon}`)}
              alt=""
            ></img>
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
