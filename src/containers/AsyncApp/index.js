import _ from 'lodash';
import {newElement, selectorUpdate} from '../../common/helpers';
import {Component} from '../../common/component';
import { loading } from '../../components/loading/index';
import { Wrapper } from './components/Wrapper';
import { List } from './components/List';

import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from './actions'

export class AsyncApp extends Component {
  constructor(props) {
    super(props);
    //this.props = props;
    this.element = newElement('section',{class: 'async_app', id: 'AsyncAppWrapper'});
    this.wrapper = new Wrapper({children: loading()});
    this.innerElement = _.join(['', this.wrapper.render()], ' ');
    this.state = {
      selected: 'reactjs',
    };
  }

  render() {
    const {element, state, innerElement} = this;
    const {store} = this.props;

    console.log('AsyncApp', this);

    componentMount(store);

    componentUpdate(store, element, state);

    handleUpdates(element, store, state);

    element.innerHTML = innerElement;
    return element;
  }

}

const componentMount = (store) => {
  store.dispatch(fetchPostsIfNeeded(store.getState().selectedSubreddit, store))
}

const componentUpdate = (store, element, state) => {
  store.subscribe(() => {
      const selectedstore = `store.getState().postsBySubreddit.${state.selected};`
      const stateselect = eval(selectedstore);
      if (stateselect && stateselect.isFetching) {
        selectorUpdate({
          selector: element.querySelector('[data-async-app-feed]'),
          state: loading()
        })
      } else if (stateselect && stateselect.items[0] && stateselect.isFetching == false) {
        const list = new List({items: stateselect.items, title: state.selected});
        selectorUpdate({
          selector: element.querySelector('[data-async-app-feed]'),
          state: list.render()
        })
      }
    }
  )
}

const handleUpdates = (element, store, state) => {

  element.onclick = function(event) {
    if (event.target.hasAttribute('data-async-app-feed-update')) {
      store.dispatch(invalidateSubreddit(store.getState().selectedSubreddit, store.getState()));
      store.dispatch(fetchPostsIfNeeded(store.getState().selectedSubreddit, store.getState()));
    }
    if (event.target.hasAttribute('data-async-app-feed-select')) {
      state.selected = event.target.getAttribute('data-async-app-feed-select');
      store.dispatch(selectSubreddit(state.selected, store.getState()));
      store.dispatch(fetchPostsIfNeeded(store.getState().selectedSubreddit, store.getState()));
    }
  }

  document.onclick = function(event) {
    if (event.target.hasAttribute('data-async-app-feed-update-html')) {
      store.dispatch(invalidateSubreddit(store.getState().selectedSubreddit, store.getState()));
      store.dispatch(fetchPostsIfNeeded(store.getState().selectedSubreddit, store.getState()));
    }
  }
}
