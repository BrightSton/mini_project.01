import styled, { css } from "styled-components";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { axiosComment, axiosPost } from "../axios/axiosData";
import axios from "axios";


const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const { isLogin } = useSelector((state) => state.user);
  const [myPost, setMyPost] = useState(false);

  const commentTag = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const addCommentSubmit = (e) => {
    e.preventDefault();

    axiosComment.addComment(Number(params.id), commentTag.current.value)
    .then((response) => {
      axiosComment.getCommentListByPostId(Number(params.id)).then((response) => {
        setCommentList(response.data);
      });
    });
  }

  const likeClick = (e) => {
    if (isLogin) {
      axiosPost.likePost(Number(params.id), post.likeByMe ? "unlike" : "like").then((response) => {
        setPost((current) => {
          const arr = {...current};
          arr.likeByMe = post.likeByMe ? false : true;
          arr.likeCount = post.likeByMe ? arr.likeCount - 1 : arr.likeCount + 1;
          return arr;
        });
      });
    } else {
      alert("로그인이 필요합니다.")
    }
  }

  useEffect(() => {
    axiosPost.getPostById(Number(params.id)).then((response) => {
      setPost(response.data);
    });

    axiosComment.getCommentListByPostId(Number(params.id)).then((response) => {
      console.log(response);
      setCommentList(response.data);
    });

  }, []);

  useEffect(() => {
    if (post) {
      if (localStorage.getItem("username") === post.username) {
        setMyPost(true);
      }
    }
  }, [post]);

  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <Post>
            {
            myPost && <PostMenuToggle onClick={() => {setToggleMenu(current => !current)}}>
              <FontAwesomeIcon icon={faEllipsis} />
            </PostMenuToggle>
            }
            <PostMenu isActive={toggleMenu}>
              <div onClick={
                () => {
                  navigate(`/write/${Number(params.id)}`);
                }
              }>수정하기</div>
              <div onClick={
                () => {
                  axiosPost.deletePost(Number(params.id)).then((response) => {
                    navigate('/');
                  });
                }
              }>삭제하기</div>
            </PostMenu>
            <PostImage>
              <img src={post.imageUrl} alt="" />  
            </PostImage>
            <PostHeader>
              <PostDate>{post.createdAt?.substring(0, 10)}</PostDate>
              <PostSubject>{post.title}</PostSubject>
              <PostAuthorName>{post.nickname}</PostAuthorName>
            </PostHeader>
            <PostContent>
              <PostText>{post.content}</PostText>
              <PostLike isActive={post.likeByMe}>
                <LikeIcon icon={faHeart} onClick={likeClick} />
                <LikeText>좋아요 {post.likeCount === 0 ? "0" : `+${post.likeCount}`}</LikeText>
              </PostLike>
            </PostContent>
          </Post>
          <CommentBox>
            <CommentTitle>Comments<CommentCount>{commentList.length}</CommentCount></CommentTitle>
            {commentList.length > 0 && (
              <CommentList>
              {commentList.map((comment, index) => {
                return (
                  <Comment key={index}>
                      <CommentName>{comment.nickname}</CommentName>
                      <CommentText>{comment.content}</CommentText>
                      <CommentDate>{comment.createAt?.substring(0,10)}</CommentDate>
                  </Comment>
                );
              })}
              </CommentList>
            )}
            { isLogin ?
              <CommentForm onSubmit={addCommentSubmit}>
                <FormText ref={commentTag}></FormText>
                <FormBtn>댓글쓰기</FormBtn>
              </CommentForm>
            :
              <NoComment>댓글을 작성하려면 로그인을 해주세요</NoComment>
            }
          </CommentBox>
        </Content>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

const Box = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;

const Post = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 6px 0 #ddd;
  position: relative;
`;

const PostMenuToggle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  font-size: 24px;
  color: ${props => props.theme.color.white};
  transition: color .3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.heavyGrey}
  }
`;

const PostMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  box-shadow: 0 0 6px 0 ${props => props.theme.color.heavyGrey};
  background-color: ${({theme}) => theme.color.white};
  ${({isActive}) => isActive ? css`
    display: block;
  ` : css`
    display: none;
  `};

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    top: -10px;
    right: 14px;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: calc( 6px * 1.732 ) solid ${props => props.theme.color.white};
  }

  div {
    padding: 20px 30px;
    cursor: pointer;
    transition: background-color .3s;

    &:hover {
      background-color: #ddd;
    }
  }

  div + div {
    border-top: 1px solid ${props => props.theme.color.lightGrey};
  }
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

const PostHeader = styled.div`
  padding: 40px 40px 20px;
`;

const PostDate = styled.div`
  color: ${props => props.theme.color.heavyGrey};
`;

const PostSubject = styled.div`
  margin-top: 20px;
  font-size: 36px;
`;

const PostAuthorName = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const PostContent = styled.div`
  padding: 0 40px 40px;
`;
const PostText = styled.div`
  font-size: 24px;
  line-height: 2;
`;


const LikeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: color .3s;
  &:hover {
    color: ${props => props.theme.color.lightGrey};
  }
`;

const PostLike = styled.div`
  margin-top: 20px;
  font-size: 24px;
  color: ${props => props.theme.color.grey};
  display: flex;
  align-items: center;
  ${props => props.isActive && css`
    ${LikeIcon} {
      color: ${props => props.theme.color.red};
    }
  `}
`;

const LikeText = styled.div`
  margin-left: 15px;
  font-size: 16px;
  color: ${props => props.theme.color.black};
`;

const CommentBox = styled.div``;
const CommentTitle = styled.div`
  padding: 40px 0;
  font-size: 36px;
  display: flex;
`;

const CommentCount = styled.div`
  margin-left: 20px;
  font-weight: bold;
`;

const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Comment = styled.li`1
  width: 100%;
  min-height: 60px;
  box-shadow: 0 0 6px 0 #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 20px 20px;
`;

const CommentName = styled.div`
  width: 100px;
`;

const CommentText = styled.pre`
  width: 100%;
`;

const CommentDate = styled.div`
  width: 120px;
  color: ${props => props.theme.color.heavyGrey};
`;

const CommentForm = styled.form`
  ${CommentList} + & {
    margin-top: 20px;
  }
  width: 100%;
  height: 70px;
  box-shadow: 0 0 6px 0 #ddd;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const FormText = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  width: 90%;
  padding: 20px;
  font-size: 16px;
`;

const FormBtn = styled.button`
  width: 10%;
  border: none;
  background-color: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};
  cursor: pointer;
  transition: background-color .3s, color .3s;

  &:hover {
    color: ${props => props.theme.color.blue};
    background-color: ${props => props.theme.color.black};
  }
`;

const NoComment = styled.div`
  ${CommentList} + & {
    margin-top: 20px;
  }
  width: 100%;
  height: 100px;
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export default Detail;