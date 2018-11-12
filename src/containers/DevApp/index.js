import _ from 'lodash';
import {updateElement} from '../../common/dom';
import {newElement, selectorUpdate, ConvertHtmlToDom} from '../../common/helpers';
import {Component} from '../../common/component';


export class DevApp extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
    this.getComponent = document.getElementById('rootdom');
    this.reload = document.getElementById('reloaddom');
    this.a = {
      type: 'ul', props: { 'className': 'list' }, children: [
        { type: 'li', props: {}, children: ['item 1'] },
        { type: 'li', props: {}, children: ['item 2'] }
      ]
    };
    this.b = {
      type: 'ul', props: { 'className': 'list' }, children: [
        { type: 'li', props: {}, children: ['item 1'] },
        { type: 'li', props: {}, children: ['test ddd'] }
      ]
    };
    this.bhtml = `
      <ul class="list">
        <li>item 1</li>
        <li>item updated</li>
        <li>item new</li>
      </ul>
    `;
    this.getConvertHtmlToDom = ConvertHtmlToDom(this.bhtml).getElementsByTagName('ul');
    this.componentMount();
    this.componentUpdate();
    this.componentHandleUpdates();
  }

  componentMount() {
    console.log('DevApp Mount App!', this);
  }

  componentUpdate() {
    console.log('DevApp ConvertHtmlToDom dev', this.getConvertHtmlToDom);
    updateElement(this.getComponent, this.a);
  }

  componentHandleUpdates() {
    this.reload.addEventListener('click', () => {
      updateElement(this.getComponent, this.b, this.a);
    });
  }

  render() {
    this.element.innerHTML = 'DevApp HTML';
    return this.element;
  }

}
