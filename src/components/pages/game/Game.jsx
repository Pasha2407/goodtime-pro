
import List from '../List';
import ListItem from '../ListItem';
import Info from '../Info';

export const Game = () => {
    return (
      <List link_back='/' page_name='Ігри'>
      <ListItem link = "/game/sports" link_name = 'Спортивні'/>
      <ListItem link = "/game/desktop" link_name = 'Настільні'/>
      </List>
    );
  };

  export const Sports = () => {
    return (
      <List link_back='/game' page_name='Спортивні'>
      <ListItem link = "/game/sports/1" link_name = 'Футбол'/>
      <ListItem link = "/game/sports/2" link_name = 'Баскетбол'/>
      </List>
    );
  };

  export const Desktop = () => {
    return (
      <List link_back='/game' page_name='Настільні'>
      <ListItem link = "/game/desktop/1" link_name = 'Waterflip'/>
      </List>
    );
  };

  export const Sports1 = () => {
    return (
      <List link_back='/' page_name='Баскетбол'>
      <Info/>
      </List>
    );
  };

  export const Sports2 = () => {
    return (
      <List link_back='/' page_name='Футбол'>
      <Info/>
      </List>
    );
  };

  export const Desktop1 = () => {
    return (
      <List link_back='/' page_name='Waterflip'>
      <Info/>
      </List>
    );
  };
