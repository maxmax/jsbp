import _ from 'lodash';
import {newElement} from '../../common/helpers';
import {defaultEvents} from './actions';

const newsTemplate = (props) => {
  
  const {text, count} = props;

  const tmpl = `<section>
    <p class="text-center">
      <span data-news-feed-text>${text}</span>
      <span data-news-feed-count><strong>${count}</strong></span>
    </p>
    <div class="dropdown" data-dropdown>
      <a href="#" class="dropdown__item" data-dropdown-btn>Option</a>
      <ul class="dropdown__menu">
        <div class="dropdown__menu__item">
          <button data-news-feed-next>+</button>
          <button data-news-feed-prev>-</button>
        </div>
        <div class="dropdown__menu__divider"></div>
        <div class="dropdown__menu__item">
          <button data-news-feed-update>Update</button>
        </div>
      </ul>
    </div>
    <br />
    <br />
  </section>`;

  return tmpl;
}

const newsTemplateUpdate = (props) => {
  const {selector, state} = props;
  selector.innerHTML = state;
}

export class NewsFeed {
  constructor(props) {
    // super(props);
    this.props = props;
    this.state = {
      el: '',
    };
  }

  render() {

    const {store} = this.props;

    defaultEvents(store, "NEWS_INCREMENT");
    // defaultEvents(store, "NEWS_DECREMENT");

    const newsElement = new newElement('section',{class: 'news_feed', id: 'newsFeedWrapper'});
    newsElement.innerHTML = _.join(['', newsTemplate({text: 'text lorenium ipsum...', count: store.getState().news})], ' ');

    newsElement.onclick = function(event) {
      if (event.target.hasAttribute('data-news-feed-next')) {
        defaultEvents(store, "NEWS_INCREMENT");
        newsTemplateUpdate({selector: this.querySelector('[data-news-feed-count]'), state: store.getState().news});
      };
      if (event.target.hasAttribute('data-news-feed-prev')) {
        defaultEvents(store, "NEWS_DECREMENT");
        newsTemplateUpdate({selector: this.querySelector('[data-news-feed-count]'), state: store.getState().news});
      };
      if (event.target.hasAttribute('data-news-feed-update')) {
        // defaultEvents(store, "NEWS_DECREMENT");
        newsTemplateUpdate({selector: this.querySelector('[data-news-feed-text]'), state: 'New text lorem ipsum...' + store.getState().news});
      };
    }

    return newsElement;
  }

}
