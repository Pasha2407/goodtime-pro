import css from './home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.main}>
      <h1><img src = {require('./images/header.png')} alt='Good Time'></img></h1>
      <nav className={css.links_container}>
        <Link  to="/about"><img src = {require('./images/pro.png')} alt='Про'></img>Про</Link>
        <Link to="/game"><img src = {require('./images/game.png')} alt='Ігри'></img>Ігри</Link>
        <Link  to="/for-mentor"><img src = {require('./images/nastav.png')} alt='Для настав'></img>Для<span>наставника</span></Link>
        <Link to="/read"><img src = {require('./images/read.png')} alt='Почитай'></img>Почитай</Link>
        <Link  to="/shop"><img src = {require('./images/shop.png')} alt='Магазин'></img>Магазин</Link>
        <Link to="/idea"><img src = {require('./images/idea.png')} alt='Ідеї'></img>Ідеї</Link>
        <Link  to="/pictures"><img src = {require('./images/photo.png')} alt='Картинки'></img>Картинки</Link>
        <Link to="/gameday"><img src = {require('./images/gameday.png')} alt='Gameday'></img>Gameday</Link>
        <Link  to="/contacts"><img src = {require('./images/contact.png')} alt='Контакти'></img>Контакти</Link>
      </nav>
    </div>
  );
};

export default Home;