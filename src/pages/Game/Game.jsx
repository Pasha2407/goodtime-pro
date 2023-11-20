import { Page } from "components/Page/Page";
import { ListItem } from "components/ListItem/ListItem";
import { Header } from "components/Header/Header";
import data from "data/json-data/game/game.json";

export const Game = () => {
  return (
    <Page>
      <Header linkBack="/" pageName="Ігри" />
      {data.map((item) => (
        <ListItem
          key={item.id}
          color={item.color}
          link={item.link}
          name={item.name}
        />
      ))}
    </Page>
  );
};
