// import { fromJS } from 'immutable';

// const initialState = fromJS({
//  count: 0,
// });

export function news(state = 0, action) {
  // if (typeof state === 'undefined') {
  //  return 0
  // }
  switch (action.type) {
  case 'NEWS_INCREMENT':
    return state + 1
  case 'NEWS_DECREMENT':
    return state - 1
  default:
    return state
  }
}
