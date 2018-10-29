// import {appendElement} from '../../common/helpers';
// import {NewsFeed} from '../News/index';
// import {Counter} from '../Counter/index';
import {AsyncApp} from '../AsyncApp/index';

//export function appendElement(el, where){
//	(where || APP.body).appendChild(el);
//  // where.appendChild(el);
//}

class AppServer {
  constructor(props) {
    // super(store);
    this.props = props;
    this.state = {
      el: null,
      //appWrapper: document.getElementById('main'),
      //news: new NewsFeed({store: props.store}),
      //counter: new Counter({store: props.store}),
      asyncapp: new AsyncApp({store: props.store}),
    };
  }

  render() {

    const {asyncapp} = this.state;
    //const {appWrapper, news, counter, asyncapp} = this.state;
    // Containers
    // News
    //appendElement(news.render(), appWrapper);
    // Counter
    //appendElement(counter.render(), appWrapper);
    // AsyncApp
    //appendElement(asyncapp.render(), appWrapper);

    console.log('class AppServer!!!!', this.props);

    //asyncapp.mount();
    //return asyncapp.render();

    //console.log('class AppServer!!!!', this.props);
    const returndev = '<div>Ddddddddddddddd</div>';
    return returndev;
  }

}

export default AppServer;
