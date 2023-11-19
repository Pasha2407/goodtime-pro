import { useParams } from "react-router-dom";
export const GameDetailsPlus = () => {
  const { id } = useParams();
  const message = [
    {
      text: "по силці 1",
    },
    {
      text: "по силці 2",
    },
  ];
  return <div>ти тут {message[id - 1].text}</div>;
};
