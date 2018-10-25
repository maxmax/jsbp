import fetch from 'cross-fetch';

const REQUEST_POSTS = 'REQUEST_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function selectSubreddit(subreddit) {
  return {type: SELECT_SUBREDDIT, subreddit}
}

export function invalidateSubreddit(subreddit) {
  return {type: INVALIDATE_SUBREDDIT, subreddit}
}

function requestPosts(subreddit) {
  return {type: REQUEST_POSTS, subreddit}
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`).then(response => response.json()).then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  console.log('Bump3!');
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

// dev

export function fetchPostsIfNeeded(subreddit, store) {
  //console.log('BUMP fetchPostsIfNeeded!', subreddit);
  //console.log('BUMP fetchPostsIfNeeded!', store);

  const {dispatch, getState} = store;

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // console.log('fetchPostsIfNeeded 2!', dispatch);
      return dispatch(fetchPosts(subreddit))
    }
  }
}

//export function fetchPostsIfNeeded(subreddit, dispatch, getState) {
//  console.log('fetchPostsIfNeeded!');
//  return (dispatch, getState) => {
//    if (shouldFetchPosts(getState(), subreddit)) {
//      console.log('fetchPostsIfNeeded 2!', dispatch);
//      return dispatch(fetchPosts(subreddit))
//    }
//  }
//}
