import css from './home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.main}>
      <h1>Good Time</h1>
      <nav className={css.links_container}>
        <Link  to="/about">Про</Link>
        <Link to="/game">Ігри</Link>
        <Link  to="/for-mentor">Для настав</Link>
        <Link to="/read">Почитай</Link>
        <Link  to="/shop">Магазин</Link>
        <Link to="/idea">Ідеї</Link>
        <Link  to="/pictures">Картинки</Link>
        <Link to="/gameday">Gameday</Link>
        <Link  to="/contacts">Контакти</Link>
      </nav>
    </div>
  );
};

export default Home;