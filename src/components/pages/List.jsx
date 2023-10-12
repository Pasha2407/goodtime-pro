import {Link} from 'react-router-dom';
import css from './list.module.css'

 const List = ({
  link_back,page_name,children}) => {
    return (
      <div className={css.main}>
         <header>
        <Link to={link_back}>назад</Link>
        <h1>{page_name}</h1>
      </header>
          {children}
      </div>
    );
  };

  export default List;