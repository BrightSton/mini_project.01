import axios from "axios";

import { addr } from "./axiosConfig";

export const getPostList = async () => { // 전체 데이터 요청
  return await axios.get(`${addr}/posts`);
}

export const getPostById = async (id) => { // id로 데이터 요청
  return await axios.get(`${addr}/posts/${id}`);
}

export const getPostListByCategory = async (categoryId) => { // 카테고리별 데이터 요청
  return await axios.get(`${addr}/posts?category=${categoryId}`);
};

export const addPost = async (data) => {
  return await axios.post(`${addr}/posts`, data);
};

export const likePost = async (data) => {
  if (data.likeByMe) {
    return await axios.patch(`${addr}/posts/${data.postId}`, {likeByMe: false, likeCount: data.likeCount - 1});
  } else {
    return await axios.patch(`${addr}/posts/${data.postId}`, {likeByMe: true, likeCount: data.likeCount + 1});
  }
}
