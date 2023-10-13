import Page from "../Page";
const back1 = require('../../home/images/back1.png')

const Read = () => {
    return (
      <Page link_back='/' page_name='Почитай' header_style='header_one' back_icon={back1}>
      </Page>
    );
  };
  
  export default Read;