import {AsyncApp} from '../AsyncApp/index';

class App {
  constructor(props) {
    // super(store);
    this.props = props;
    this.asyncapp = new AsyncApp({store: props.store});
  }

  render() {
    return this.asyncapp.render();
  }

}

export default App;
