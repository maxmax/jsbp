//import Window from 'window';
//const window = new Window();
//import {BarApp} from '../BarApp/index';

class AppServer {
  constructor(props) {
    // super(store);
    this.props = props;
    this.state = {
      text: 'Server render blablabla'
    };
  }

  render() {
    return `<div id="main">${this.state.text}</div>`;
  }

}

export default AppServer;
