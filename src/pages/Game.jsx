import { useParams } from "react-router-dom";
import { Page } from "components/Page/Page";
import { ListItem } from "components/ListItem/ListItem";
import data from "data/json-data/game/game.json";
import dataList from "data/json-data/game/game-list.json";
import dataDetails from "data/json-data/game/game-details.json";

export const Game = () => {
  return (
    <Page linkBack="/" pageName="Ігри">
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

export const GameList = () => {
  const { id } = useParams();
  return (
    <Page linkBack="/game" pageName={dataList[id - 1].pageName}>
      {dataList[id - 1].list.map((item) => (
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

export const GameDetails = () => {
  const { id } = useParams();
  return (
    <Page
      linkBack={dataDetails[id - 1].linkBack}
      pageName={dataDetails[id - 1].name}
    >
      <p>
        <b>Правила:</b>
        {dataDetails[id - 1].pr}
      </p>
      <p>
        <b>Інвентар:</b>
        {dataDetails[id - 1].in}
      </p>
    </Page>
  );
};
