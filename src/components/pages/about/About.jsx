import Page from '../Page';
import Info from '../Info';
const about_header = <img style={{width: "55%", marginTop: "25px" }} src = {require('../../home/images/header.png')} alt='Good Time'></img>
const back1 = require('../../home/images/back1.png')

 const About = () => {
    return (
      <Page link_back='/' page_name={about_header} header_style='header_one' back_icon={back1}>
      <Info/>
      </Page>
    );
  };
  export default About;
