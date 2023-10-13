import {Link} from 'react-router-dom';
import css from './page.module.css'

 const Page = ({
  link_back,page_name,children,header_style,back_icon}) => {
    return (
      <div className={css.main}>
         <header className={css[header_style]}>
        <Link to={link_back}><img style={{width: "20px" }} src= {back_icon} alt = "Назад"/></Link>
        <h1>{page_name}</h1>
      </header>
          {children}
      </div>
    );
  };

  export default Page;