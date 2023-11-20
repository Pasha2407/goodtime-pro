import { useParams } from "react-router-dom";
import { Page } from "components/Page/Page";
import { Header } from "components/Header/Header";
import data from "data/json-data/game/game-details.json";

export const GameDetails = () => {
  const { id } = useParams();

  return (
    <Page>
      <Header linkBack={data[id - 1].linkBack} pageName={data[id - 1].name} />
      <p>
        <b>Правила:</b>
        {data[id - 1].pr}
      </p>
      <p>
        <b>Інвентар:</b>
        {data[id - 1].in}
      </p>
    </Page>
  );
};
