// import { NewsFeed } from '../containers/News/index';
import { Dropdown } from '../components/dropdown/index';
import { Slideshow } from '../components/slideshow/index';

const APP_DEFAULT = true;

export function defaultService() {

  console.log("defaultService Mount!");
  console.log("defaultService Mount APP_DEFAULT!", APP_DEFAULT);
  // const APP_TEST = 'APP_TEST dev';

  // Containers
  // Newsfeed
  // let newsfeed = new NewsFeed({element: "body"});
  // newsfeed.render();

  // Components
  // Dropdown on body
  let dropdown = new Dropdown({element: "body"});
  dropdown.initDropdown();


  // Slideshow on data-slideshow
  let slideshow = new Slideshow({element: "[data-slideshow]"});
  slideshow.initSlideshow();

}
