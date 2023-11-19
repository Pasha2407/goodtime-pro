// import css from '../page.module.css'
// import css_link from '../list-item.module.css'
import Page from "components/Page/Page";
import ListItem from "components/ListItem/ListItem";
// const color_one = css.link_list + ' ' + css_link.color_one;
// const color_two = css.link_list + ' ' + css_link.color_two;
// const back1 = require('../../home/images/back1.png')
// const back2 = require('../../home/images/back2.png')

export const Game = () => {
  return (
    <Page link_back="/" page_name="Ігри" header_style="header_one">
      <ListItem link="/game/sports" link_name="Спортивні" />
      <ListItem link="/game/desktop" link_name="Настільні" />
    </Page>
  );
};

export const Sports = () => {
  return (
    <Page link_back="/game" page_name="Спортивні" header_style="header_one">
      <ListItem link="/game/sports/1" link_name="Баскетбол" />
      <ListItem link="/game/sports/2" link_name="Футбол" />
    </Page>
  );
};

export const Desktop = () => {
  return (
    <Page link_back="/game" page_name="Настільні" header_style="header_one">
      <ListItem link="/game/desktop/3" link_name="Waterflip" />
    </Page>
  );
};

// export const Sports1 = () => {
//   return (
//     <Page link_back='/game/sports' page_name='Баскетбол' header_style='header_two' back_icon={back2}>
//     <Description/>
//     </Page>
//   );
// };

// export const Sports2 = () => {
//   return (
//     <Page link_back='/game/sports' page_name='Футбол' header_style='header_two' back_icon={back2}>
//     <Description/>
//     </Page>
//   );
// };

// export const Desktop1 = () => {
//   return (
//     <Page link_back='/game/desktop' page_name='Waterflip' header_style='header_two' back_icon={back2}>
//     <Description/>
//     </Page>
//   );
// };
