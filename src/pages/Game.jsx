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
  const data = dataList[id - 1];
  return (
    <Page linkBack="/game" pageName={data.pageName}>
      {data.list.map((item) => (
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
  const data = dataDetails[id - 1];

  return (
    <Page linkBack={data.linkBack} pageName={data.name} pageGradient>
      <main>
        {data.goal && (
          <p>
            <b>&emsp;Ціль гри: </b>
            {data.goal}
          </p>
        )}
        {data.inventory && (
          <p>
            <b>&emsp;Інвентар: </b>
            {data.inventory}
          </p>
        )}
        {data.playing && (
          <p>
            <b>&emsp;Грають: </b>
            {data.playing}
          </p>
        )}
        {data.rules && (
          <p>
            <b>&emsp;Правила: </b>
            {data.rules}
          </p>
        )}
        {data.image && (
          <div>
            <img
              src={require(`data/images/game-details/${data.image}`)}
              alt=""
            />
          </div>
        )}
        {data.text && data.text.map((item) => <p>&emsp;{item}</p>)}
      </main>
    </Page>
  );
};
