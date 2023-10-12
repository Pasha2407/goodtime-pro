import List from '../List';
import ListItem from '../ListItem';
import Info from '../Info';
import css from '../list.module.css'
const color_one = css.link_list + ' ' + css.color_one;

export const ForMentor = () => {
    return (
      <List link_back='/' page_name='Для наставника'>
      <ListItem link = "/for-mentor/1" link_name = 'Вступ' color = {color_one}/>
      </List>
    );
  };

  export const Item1= () => {
    return (
      <List link_back='/for-mentor' page_name='Вступ'>
      <Info/>
      </List>
    );
  };
