import { Link } from "react-router-dom";
import css from "./Page.module.css";
import back1 from "data/images/interacting-icons/back1.png";
import back2 from "data/images/interacting-icons/back2.png";

export const Page = ({
  children,
  linkBack,
  back,
  pageName,
  sizeName,
  pageImage,
  pageGradient,
}) => {
  return (
    <div className={css.Container}>
      <header className={pageGradient ? css.GradientHeader : css.DefaultHeader}>
        <Link to={linkBack}>
          <img
            src={pageGradient ? back2 : back1}
            style={{ width: 20 }}
            alt=""
          ></img>
        </Link>
        <h1 style={sizeName}>
          {pageImage ? <img src={[pageImage]} alt={pageName}></img> : pageName}
        </h1>
      </header>
      {children}
    </div>
  );
};
