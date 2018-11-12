import _ from 'lodash';
import {newElement, selectorUpdate} from '../../common/helpers';
import {Component} from '../../common/component';


export class BarApp extends Component {
  constructor(props) {
    super(props);
    this.element = typeof document !== 'undefined' ? document.createElement('div') : null;
  }

  render() {
    this.element.innerHTML = 'BarApp HTML!';
    return this.element;
  }

}
