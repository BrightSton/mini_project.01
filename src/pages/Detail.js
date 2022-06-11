import styled from "styled-components";
import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <Post>
            <PostImage>
              <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />  
            </PostImage>            
            <PostHeader>
              <PostDate>2015.01.25</PostDate>
              <PostSubject>맛있는 연어 스테이크 굽기</PostSubject>
              <PostAuthorName>닉네임</PostAuthorName>
            </PostHeader>
            <PostContent>
              <PostText>
                1. 굽는다<br/>
                2. 튀긴다<br/>
                3. 먹는다<br/>
              </PostText>
              <PostLike>
                <FontAwesomeIcon icon={faHeart} />
                <LikeText>좋아요 +3</LikeText>
              </PostLike>
            </PostContent>
          </Post>
          <CommentBox>
            <CommentTitle>Comments<CommentCount>2</CommentCount></CommentTitle>
            <CommentList>
              <Comment>
                <CommentName>닉네임</CommentName>
                <CommentText>너무 마시써용</CommentText>
                <CommentDate>2015.03.15</CommentDate>
              </Comment>
              <Comment>
                <CommentName>닉네임</CommentName>
                <CommentText>너무 마시써용</CommentText>
                <CommentDate>2015.03.15</CommentDate>
              </Comment>
            </CommentList>
            <CommentForm>
              <FormText></FormText>
              <FormBtn>댓글쓰기</FormBtn>
            </CommentForm>
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

const PostLike = styled.div`
  margin-top: 20px;
  font-size: 24px;
  color: ${props => props.theme.color.grey};
  display: flex;
  align-items: center;
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

const Comment = styled.li`
  width: 100%;
  height: 60px;
  box-shadow: 0 0 6px 0 #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 20px;
`;

const CommentName = styled.div`
  width: 100px;
`;

const CommentText = styled.div`
  width: 100%;
`;

const CommentDate = styled.div`
  width: 100px;
  color: ${props => props.theme.color.heavyGrey};
`;

const CommentForm = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 6px 0 #ddd;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const FormText = styled.textarea`
  resize: none;
  width: 90%;
  border: none;
`;

const FormBtn = styled.button`
  width: 10%;
  border: none;
  background-color: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};
`;

export default Detail;