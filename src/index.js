// Client
// import _ from 'lodash';
import {store} from './reducers';
import App from './containers/App/index';
import {defaultService} from './services/defaultService.js';
import {appendElement} from './common/helpers';

import './style/index.scss';

const appWrapper = document.getElementById('main');
const appmain = new App({store: store});
appendElement(appmain.render(), appWrapper);

defaultService();

if (process.env.NODE_ENV !== 'production') {
  console.log('window Mount Index', window);
}
