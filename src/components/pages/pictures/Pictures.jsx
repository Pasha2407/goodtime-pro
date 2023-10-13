import Page from "../Page";
const back1 = require('../../home/images/back1.png')

const Pictures = () => {
    return (
      <Page link_back='/' page_name='Картинки' header_style='header_one' back_icon={back1}>
      </Page>
    );
  };
  
  export default Pictures;