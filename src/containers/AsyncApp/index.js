import _ from 'lodash';
import {newElement} from '../../common/helpers';
// import {defaultEvents} from './actions';
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from './actions'

const templateWrapper = (props) => {

  const {children, count} = props;

  const tmpl = `<section>
    <p class="text-center">
      <div data-async-app-feed>${children}</div>
      <span data-news-feed-count><strong>${count}</strong></span>
    </p>
    <br />
  </section>`;

  return tmpl;
}

const templateList = (props) => {
  const {items} = props;
  const itemsList = items.map(function(item) {
    return `<li id="${'item-' + item.id}">${item.author}</li>`;
  });
  return `<ul>${itemsList.join('')}</ul>`;
}

const templateUpdate = (props) => {
  const {selector, state} = props;
  selector.innerHTML = state;
}

export class AsyncApp {
  constructor(props) {
    // super(props);
    this.props = props;
    this.state = {
      el: '',
    };
  }

  render() {

    const {store} = this.props;

    store.dispatch(fetchPostsIfNeeded(store.getState().selectedSubreddit, store))

    const element = new newElement('section',{class: 'async_app', id: 'AsyncAppWrapper'});
    element.innerHTML = _.join(['', templateWrapper({children: 'Loading...', count: '8'})], ' ');

    store.subscribe(() => {
        const {didInvalidate, isFetching, items} = store.getState().postsBySubreddit.reactjs;
        if (isFetching) {
          templateUpdate({selector: element.querySelector('[data-async-app-feed]'), state: 'Loading...'})
        } else if (items[0] && isFetching == false) {
          templateUpdate({selector: element.querySelector('[data-async-app-feed]'), state: templateList({items: items})})
        }
      }
    )

    return element;

  }

}
