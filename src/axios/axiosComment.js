import axios from "axios";

import { addr } from "./axiosConfig";

export const getCommentListByPostId = async (postId) => { // 포스트 ID로 댓글 가져오기
    return await axios.get(`${addr}/comment?postId=${postId}`);
}

export const addComment = async (data) => { // 댓글 추가하기
    return await axios.post(`${addr}/comment`, data);
}