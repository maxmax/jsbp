// req

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function parseJSON(response) {
  return response.json()
}

export const rqe = (url) => {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(response) {
      return response;
    }).catch(function(error) {
      return {status: "error", statusText: error};
    })
}
