import _ from 'lodash';
import {newElement, selectorUpdate} from '../../common/helpers';
import {defaultEvents} from './actions';

const templateWrapper = (props) => {

  const {count} = props;

  const tmpl = `<section>
    <p class="text-center">
      <span data-count-value><strong>${count}</strong></span>
    </p>
    <div>
      <button data-count-plus>+</button>
      <button data-count-minus>-</button>
    </div>
  </section>`;

  return tmpl;
}

export class Counter {
  constructor(props) {
    // super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    const {store} = this.props;

    defaultEvents(store, "COUNT_INCREMENT");

    const countElement = new newElement('section',{class: 'count_wrapper', id: 'countFeedWrapper'});
    countElement.innerHTML = _.join(['', templateWrapper({count: store.getState().counter})], ' ');

    countElement.onclick = function(event) {
      if (event.target.hasAttribute('data-count-plus')) {
        defaultEvents(store, "COUNT_INCREMENT");
        selectorUpdate({selector: this.querySelector('[data-count-value]'), state: store.getState().counter});
      };
      if (event.target.hasAttribute('data-count-minus')) {
        defaultEvents(store, "COUNT_DECREMENT");
        selectorUpdate({selector: this.querySelector('[data-count-value]'), state: store.getState().counter});
      };
    }

    return countElement;
  }

}
