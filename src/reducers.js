import {combineReducers, createStore, compose, applyMiddleware} from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {counter} from './containers/Counter/reducer';
import {news} from './containers/News/reducer';
import {postsBySubreddit, selectedSubreddit} from './containers/AsyncApp/reducer';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    counter,
    news,
    postsBySubreddit,
    selectedSubreddit,
});

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// here is our redux-store
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

store.subscribe(() =>
  //render,
  console.log("rootReducer subscribe mount:", store.getState())
)
