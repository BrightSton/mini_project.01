import axios from "axios";

const addr = "http://13.125.4.231";

/*
return axios(url, {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
}).then(response => {
})
*/

// const headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Content-Type': 'application/json',
// }

export const axiosPost = {
  getPost: () => axios.get(`${addr}/api/posts`),
  getPostById: (id) => axios.get(`${addr}/api/posts/${id}`),
  getPostListByCategory: (category) => axios.get(`${addr}/posts?category=${category}`),
  addPost: (data) => axios.post(`${addr}/posts`, data),
  likePost: (likeByMe, username, postId, action) => likeByMe ?
    axios.post(`${addr}/posts/${postId}`, {username, postId, action}) :
    axios.post(`${addr}/posts/${postId}`, {username, postId, action})
}

export const axiosComment = {
  getCommentListByPostId: (postId) => axios.get(`${addr}/comment?postId=${postId}`),
  addComment: (data) => axios.post(`${addr}/comment`, data)
}