import data from "data/json-data/game-details.json";
import { useParams, Link } from "react-router-dom";
export const GameDetails = () => {
  const { id } = useParams();
  return (
    <div>
      {data[id - 1].name}
      <Link to="/game/sports/1/1">next</Link>
      <Link to="/game/sports/1/2">next2</Link>
    </div>
  );
};
