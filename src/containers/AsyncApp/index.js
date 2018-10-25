import _ from 'lodash';
import {newElement} from '../../common/helpers';
// import {defaultEvents} from './actions';
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from './actions'

const templateWrapper = (props) => {

  const {text, count} = props;

  const tmpl = `<section>
    <p class="text-center">
      <span data-news-feed-text>${text}</span>
      <span data-news-feed-count><strong>${count}</strong></span>
    </p>
    <br />
  </section>`;

  return tmpl;
}

// const templateUpdate = (props) => {
//  const {selector, state} = props;
//  selector.innerHTML = state;
// }

export class AsyncApp {
  constructor(props) {
    // super(props);
    this.props = props;
    this.state = {
      el: '',
    };
  }

  render() {

    console.log('AsyncApp', this);

    // console.log('AsyncApp 2', selectedSubreddit);

    const {store} = this.props;
    const {dispatch} = store;
    const {selectedSubreddit} = store.getState();

    console.log('AsyncApp store', selectedSubreddit);

    dispatch(fetchPostsIfNeeded(selectedSubreddit, store))

    console.log('AsyncApp 3333 store', store.getState())

    //const { selectedSubreddit } = this.props.store.getState();
    //const { dispatch } = this.props.store;

    //dispatch(fetchPostsIfNeeded(selectedSubreddit))
    //console.log('AsyncApp selectedSubreddit', selectedSubreddit);

    //defaultEvents(store, "NEWS_INCREMENT");
    // defaultEvents(store, "NEWS_DECREMENT");

    const element = new newElement('section',{class: 'async_app', id: 'AsyncAppWrapper'});
    element.innerHTML = _.join(['', templateWrapper({text: 'text loreniusdasdm ipsum...', count: '8'})], ' ');

    //

    store.subscribe(() =>
      //render,
      // console.log("Ddddddddddddd========rootReducer subscribe mount:", store.getState())
      console.log("Ddddddddddddd========rootReducer subscribe mount:", store.getState().postsBySubreddit)
    )

    //newsElement.onclick = function(event) {
    //  console.log('AsyncApp 3333 store', store.getState())
    //}

    //newsElement.onclick = function(event) {
      //if (event.target.hasAttribute('data-news-feed-next')) {
      //  defaultEvents(store, "NEWS_INCREMENT");
      //  newsTemplateUpdate({selector: this.querySelector('[data-news-feed-count]'), state: store.getState().news});
      //};
      //if (event.target.hasAttribute('data-news-feed-prev')) {
      //  defaultEvents(store, "NEWS_DECREMENT");
      //  newsTemplateUpdate({selector: this.querySelector('[data-news-feed-count]'), state: store.getState().news});
      //};
      //if (event.target.hasAttribute('data-news-feed-update')) {
      //  // defaultEvents(store, "NEWS_DECREMENT");
      //  newsTemplateUpdate({selector: this.querySelector('[data-news-feed-text]'), state: 'New text lorem ipsum...' + store.getState().news});
      //};
    //}

    return element;

  }

}
