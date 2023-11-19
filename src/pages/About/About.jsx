import Page from "components/Page/Page";
import Description from "components/Description/Description";
// const about_header = <img style={{width: "55%", marginTop: "25px" }} src = {require('../../home/images/header.png')} alt='Good Time'></img>
// const back1 = require('../../home/images/back1.png')

export const About = () => {
  return (
    <Page link_back="/" header_style="header_one">
      <Description />
    </Page>
  );
};
