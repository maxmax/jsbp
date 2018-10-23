// import _ from 'lodash';
import {store} from './reducers';
import { App } from './containers/App/index';
import {defaultService} from './services/defaultService.js';
// import {counterInt} from './containers/counter/index';
// import {appendElement} from './common/helpers';

import './style/index.scss';

// initial app
// appendElement(counterInt(), app);
let app = new App({store: store});
app.render()

// initial by default
defaultService();


if (process.env.NODE_ENV !== 'production') {
  // Store
  console.log('Store', store);
  console.log('Looks like we are in development mode!');
  console.log('window Mount Index', window);
}
