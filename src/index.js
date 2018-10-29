// import _ from 'lodash';
import {store} from './reducers';
import App from './containers/App/index';
import {defaultService} from './services/defaultService.js';
import {appendElement} from './common/helpers';

import './style/index.scss';

// initial app
const appWrapper = document.getElementById('main');
const appmain = new App({store: store});
appendElement(appmain.render(), appWrapper);

// initial by default
defaultService();


if (process.env.NODE_ENV !== 'production') {
  // Store
  console.log('Store', store);
  console.log('Looks like we are in development mode!');
  console.log('window Mount Index', window);
}
