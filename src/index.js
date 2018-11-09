// Client
// import _ from 'lodash';
import {store} from './reducers';
import App from './containers/App/index';
import {defaultService} from './services/defaultService.js';
import {appendElement} from './common/helpers';

import './style/index.scss';

const appWrapper = document.getElementById('main');

function component() {
  let element = document.createElement('main');
  const appmain = new App({store: store});
  console.log('appmain', appmain);
  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return appmain.render();
}

// appendElement(component(), appWrapper);
// appendElement(element, appWrapper);
appWrapper.appendChild(component());

defaultService();

if (process.env.NODE_ENV !== 'production') {
  console.log('window Mount Index', window);
}
