import { Page } from "components/Page/Page";
import header from "data/images/home-icons/header.png";
import data from "data/json-data/about/about.json";

export const About = () => {
  return (
    <Page linkBack="/" pageName="Про" pageImage={header}>
      <main>
        <p>
          <strong>&emsp;«Good Time» </strong>- це ресурс для лідерів
          підліткових, молодіжних служінь та працівників таборів.
        </p>
        {data.map((item) => (
          <p key={item.id}>
            &emsp;В значку
            <strong>{item.header}</strong>
            {item.text}
          </p>
        ))}
      </main>
    </Page>
  );
};
