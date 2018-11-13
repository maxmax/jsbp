// import { NewsFeed } from '../containers/News/index';
import Dropdown from '../components/dropdown/index';
import Slideshow from '../components/slideshow/index';

const APP_DEFAULT = true;

export function defaultService() {

  console.log("defaultService Mount!");
  console.log("defaultService Mount APP_DEFAULT!", APP_DEFAULT);

  // Containers
  // let newsfeed = new NewsFeed({element: "body"});
  // newsfeed.render();

  // Components
  // Dropdown on body
  const dropdown = new Dropdown({
    element: 'body',
    button: 'data-dropdown-btn',
    closest: '[data-dropdown]',
    active: 'dropdown_show',
  });
  dropdown.init();


  // Slideshow on data-slideshow
  const slideshow = new Slideshow({element: "[data-slideshow]"});
  slideshow.initSlideshow();

}
