import css from "./Page.module.css";

export const Page = ({
  link_back,
  page_name,
  children,
  header_style,
  back_icon,
}) => {
  return <div className={css.Container}>{children}</div>;
};
