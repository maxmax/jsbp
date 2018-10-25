// import { fromJS } from 'immutable';

// const initialState = fromJS({
//  count: 0,
// });

export function counter(state = 0, action) {
  // if (typeof state === 'undefined') {
  //  return 0
  // }
  switch (action.type) {
  case 'COUNT_INCREMENT':
    return state + 1
  case 'COUNT_DECREMENT':
    return state - 1
  default:
    return state
  }
}
