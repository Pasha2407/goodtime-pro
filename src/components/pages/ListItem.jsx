import {Link} from 'react-router-dom';
import css from './list.module.css'
const ListItem = ({link,link_name,color}) => {
    return (
<nav className={color}>
        <Link  className={css.link} to={link}>{link_name}</Link>
      </nav>
      );
    };

    export default ListItem;