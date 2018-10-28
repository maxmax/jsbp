import _ from 'lodash';
import {newElement} from '../../common/helpers';
import { loading } from '../../components/loading/index';
// import {defaultEvents} from './actions';
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from './actions'

const templateWrapper = (props) => {

  const {children, count} = props;

  const tmpl = `<section>
    <div class="text-center">
      <div data-async-app-feed>${children}</div>
    </div>
    <br />
  </section>`;

  return tmpl;
}

const templateList = (props) => {
  const {items} = props;
  const itemsList = items.map(function(item) {
    return `<li id="${'item-' + item.id}">${item.author} <strong>${item.subreddit}</strong></li>`;
  });
  //
  //for (let [key, value] of map) {
  // console.log(key+" - "+value);
  //}
  //
  const option = `
    <br />
    <br />
    <button data-async-app-feed-update>Update</button>
    <button data-async-app-feed-select="reactjs">Select React</button>
    <button data-async-app-feed-select="vue">Select Vue</button>
    <br />
  `;
  return `${option}<ul>${itemsList.join('')}</ul>`;
}

const templateUpdate = (props) => {
  const {selector, state} = props;
  selector.innerHTML = state;
}

const componentDidMount = (store) => {
  store.dispatch(fetchPostsIfNeeded(store.getState().selectedSubreddit, store))
}

const componentUpdate = (store, element, state) => {
  store.subscribe(() => {
      const selectedstore = `store.getState().postsBySubreddit.${state.selected};`
      const stateselect = eval(selectedstore);
      if (stateselect && stateselect.isFetching) {
        templateUpdate({
          selector: element.querySelector('[data-async-app-feed]'),
          state: loading()
        })
      } else if (stateselect && stateselect.items[0] && stateselect.isFetching == false) {
        templateUpdate({
          selector: element.querySelector('[data-async-app-feed]'),
          state: templateList({items: stateselect.items})
        })
      }
    }
  )
}

// to helpers or lib

//class Component {
//  constructor(element) {
//    this.element = element;
//  }
//  speak() {
//    console.log(this.element + ' makes a noise.');
//  }
//}

//export class AsyncApp extends Component {
export class AsyncApp {
  constructor(props) {
    // super(props);
    this.props = props;
    this.element = new newElement('section',{class: 'async_app', id: 'AsyncAppWrapper'});
    this.innerElement = _.join(['', templateWrapper({children: loading()})], ' ');
    this.state = {
      selected: 'reactjs'
    };
  }

  handleUpdates(element, store, state) {

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

  render() {
    const {element, state, innerElement} = this;
    const {store} = this.props;

    console.log('AsyncApp', this);

    // componentDidMount || AsyncApp Mount
    componentDidMount(store);

    // componentDidUpdate || store.subscribe
    componentUpdate(store, element, state);

    // Events
    this.handleUpdates(element, store, state);

    //return template
    element.innerHTML = innerElement;
    return element;

  }

}
