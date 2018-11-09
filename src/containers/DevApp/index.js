import _ from 'lodash';
import {newElement, selectorUpdate} from '../../common/helpers';
import {Component} from '../../common/component';


export class DevApp extends Component {
  constructor(props) {
    super(props);
    //this.props = props;
    this.element = document.createElement('div');
    this.componentMount = childMount('test');
    this.componentUpdate = childUpdate('test 2');
    this.componentHandleUpdates = childHandleUpdates('test 3');
  }

  render() {
    // console.log('DevApp', this);
    this.element.innerHTML = 'DevApp HTML';
    return this.element;
  }

}

const childMount = (props) => {
  return (console.log('childMount!', props));
}

const childUpdate = (props) => {
  return (console.log('childUpdate!', props));
}

const childHandleUpdates = (props) => {
  return (console.log('childHandleUpdates!', props));
}
