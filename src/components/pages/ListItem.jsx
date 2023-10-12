import {Link} from 'react-router-dom';
import css from './list.module.css'
const ListItem = ({link,link_name}) => {
    return (
<nav className={css.link_list}>
        <Link  to={link}>{link_name}</Link>
      </nav>
      );
    };

    export default ListItem;