import {Link} from 'react-router-dom';
import GameList from './GameList';
export const Game = () => {
    return (
      <GameList
      link_back={'/'}
      page_name={'Ігри'}
      link_one={'/game/sports'}
      link_one_name={'Спортивні'}
      link_two={'/game/desktop'}
      link_two_name={'Настільні'}
      />
    );
  };

  export const Sports = () => {
    return (
      <GameList
      link_back={'/game'}
      page_name={'Спортивні'}
      link_one={'/game/sports/basketbol'}
      link_one_name={'Баскетбол'}
      link_two={'/game/sports/footbal'}
      link_two_name={'Футбол'}
      />
    );
  };

  export const Sports_Basketbol = () => {
    return (
      <GameList
      link_back={'/game'}
      page_name={'Спортивні'}
      link_one={'/game/sports/basketbol'}
      link_one_name={'Баскетбол'}
      link_two={'/game/sports/footbal'}
      link_two_name={'Футбол'}
      />
    );
  };

  export const Sports_Footbal = () => {
    return (
      <GameList
      link_back={'/game'}
      page_name={'Спортивні'}
      link_one={'/game/sports/basketbol'}
      link_one_name={'Баскетбол'}
      link_two={'/game/sports/footbal'}
      link_two_name={'Футбол'}
      />
    );
  };

  export const Desktop = () => {
    return (
      <GameList
      link_back={'/game'}
      page_name={'Настільні'}
      link_one={'/game/desktop/waterflip'}
      link_one_name={'Waterflip'}
      link_two={'/'}
      link_two_name={'home'}
      />
    );
  };

  export const Desktop_Waterflip = () => {
    return (
      <GameList
      link_back={'/game/desktop'}
      page_name={'Waterflip'}
      link_one={'/'}
      link_one_name={'home'}
      link_two={'/'}
      link_two_name={'home'}
      />
    );
  };
