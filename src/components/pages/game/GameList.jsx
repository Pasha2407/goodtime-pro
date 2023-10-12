import {Link} from 'react-router-dom';
import css from './game.module.css'
 const GameList = ({
  link_back,page_name,link_one,link_one_name,link_two,link_two_name
}) => {
    return (
      <div className={css.main}>
         <header>
        <Link to={link_back}>назад</Link>
        {page_name}
      </header>
          <nav className={css.link_list}>
        <Link  to={link_one}>{link_one_name}</Link>
        <Link to={link_two}>{link_two_name}</Link>
      </nav>
      </div>
    );
  };

  export default GameList;