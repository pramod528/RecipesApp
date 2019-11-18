

export const getPosts = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response.json().then(json => {
        dispatch({
          type: "getPosts",
          payload: json
        })
      })
    })
  }

}
export const getDetailPost = (id) => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id).then(response => {
      response.json().then(json => {
        dispatch({
          type: "USER_DETAIL",
          payload: json
        })
      })
    })
  }

}

export const search = (name) => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users?name=" + name).then(response => {
      response.json().then(json => {
        dispatch({
          type: "USER_SEARCH",
          payload: json
        })
      })
    })
  }

}