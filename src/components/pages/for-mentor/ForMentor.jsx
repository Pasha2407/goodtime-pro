import Page from '../Page';
import ListItem from '../ListItem';
import Info from '../Info';
import css from '../page.module.css'
import css_link from '../list-item.module.css'
const color_one = css.link_list + ' ' + css_link.color_one;
const back1 = require('../../home/images/back1.png')
const back2 = require('../../home/images/back2.png')

export const ForMentor = () => {
    return (
      <Page link_back='/' page_name='Для наставника' header_style='header_for_mentor' back_icon={back1}>
      <ListItem link = "/for-mentor/1" link_name = 'Вступ' color = {color_one}/>
      </Page>
    );
  };

  export const Item1= () => {
    return (
      <Page link_back='/for-mentor' page_name='Вступ' header_style='header_two' back_icon={back2}>
      <Info/>
      </Page>
    );
  };
