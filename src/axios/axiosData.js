import axios from "axios";

const addr = "http://13.125.4.231";

export const axiosPost = {
  getPost: () => axios.get(`${addr}/api/posts`),
  getPostById: (id) => axios.get(`${addr}/api/posts/detail/${id}`),
  getPostListByCategory: (category) => axios.get(`${addr}/api/posts/${category}`),
  addPost: (data) => axios.post(`${addr}/api/posts`, data),
  modifyPost: (id, data) => axios.post(`${addr}/api/posts/${id}`, data),
  deletePost: (id) => axios.delete(`${addr}/api/posts/${id}`),
  likePost: (id, data) => axios.post(`${addr}/api/like/${id}`, data)
}

export const axiosComment = {
  getCommentListByPostId: (postId) => axios.get(`${addr}/api/comments/${postId}`),
  addComment: (data) => axios.post(`${addr}/api/comments`, data),
  removeComment: (commentId) => axios.delete(`${addr}/api/comments/${commentId}`),
}