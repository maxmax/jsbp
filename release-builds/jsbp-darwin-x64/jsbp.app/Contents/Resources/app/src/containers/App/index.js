import {appendElement} from '../../common/helpers';
import {NewsFeed} from '../News/index';
import {Counter} from '../Counter/index';

export class App {
  constructor(props) {
    // super(store);
    this.props = props;
    this.state = {
      el: null,
      appWrapper: document.getElementById('main'),
      news: new NewsFeed({store: props.store}),
      counter: new Counter({store: props.store})
    };
  }

  render() {
    const {appWrapper, news, counter} = this.state;

    // News
    // console.log('App - News', news.render());
    appendElement(news.render(), appWrapper);
    // news.after()

    // Counter
    appendElement(counter.render(), appWrapper);
  }

}
