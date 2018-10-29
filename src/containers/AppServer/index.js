//import Window from 'window';
//const window = new Window();

class AppServer {
  constructor(props) {
    // super(store);
    this.props = props;
    this.state = {
      //testel: window.document.createElement('div'),
      text: 'Server render blablabla'
    };
  }

  render() {
    return `<div>${this.state.text}</div>`;
  }

}

export default AppServer;
