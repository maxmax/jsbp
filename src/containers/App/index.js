import {AsyncApp} from '../AsyncApp/index';
import {DevApp} from '../DevApp/index';
import {BarApp} from '../BarApp/index';

class App {
  constructor(props) {
    // super(store);
    this.props = props;
    this.asyncapp = new AsyncApp({store: props.store});
    this.devapp = new DevApp({store: props.store});
    this.barapp = new BarApp({store: props.store});
  }

  render() {
    console.log('App render', this);

    let element = document.createElement('div');
    element.innerHTML = _.join([
      'Hello',
      this.asyncapp.render().outerHTML,
      this.devapp.render().outerHTML,
      this.barapp.render().outerHTML
    ], ' ');

    return element;
  }

}

export default App;
