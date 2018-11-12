export class Component {
  constructor(props) {
    this.props = props;
    this.componentDefaultMount();
  }

  componentDefaultMount() {
    console.log('Component componentDefaultMount!');
  }

  componentMount() {}

  componentUpdate() {}

  componentHandleUpdates() {}

}
