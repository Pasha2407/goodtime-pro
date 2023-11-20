import { useParams } from "react-router-dom";
import { Page } from "components/Page/Page";
import { Header } from "components/Header/Header";
import { ListItem } from "components/ListItem/ListItem";
import data from "data/json-data/game/game-list.json";

export const GameList = () => {
  const { id } = useParams();

  return (
    <Page>
      <Header linkBack="/game" pageName={data[id - 1].pageName} />
      {data[id - 1].list.map((item) => (
        <ListItem
          key={item.id}
          color={item.color}
          link={item.link}
          name={item.name}
        ></ListItem>
      ))}
    </Page>
  );
};
