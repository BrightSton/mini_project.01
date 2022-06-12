import styled from "styled-components";
import Header from "../components/Header";
import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/modules/post";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const subjectRef = useRef(null);
  const contentRef = useRef(null);

  const addPostSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({
      image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
      title: subjectRef.current.value,
      content: contentRef.current.value,
      nickname: user.nickname,
      likeCount: 0,
      likeByMe: false,
      category: 0,
      createAt: "2021.01.28",
    }));
    navigate("/");
  }

  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <Form onSubmit={addPostSubmit}>
            <Subject>
              <input type="text" placeholder="제목을 입력해주세요" ref={subjectRef} />
            </Subject>
            <Image>
              {/* <img src="" alt="" /> */}
              <label htmlFor="imageFile"></label>
              <input id="imageFile" type="file" />
            </Image>
            <Text>
              <textarea placeholder="내용을 입력해주세요" ref={contentRef}></textarea>
            </Text>
            <Button>
              <button>글쓰기</button>
            </Button>
          </Form>
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

const Content = styled.div`
`;

const Form = styled.form`
  width: 100%;
`;

const Subject = styled.div`
  width: 100%;
  height: 70px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: 0 0 6px 0 #ddd;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 24px;
  }
`;
const Image = styled.div`
  label {
    display: block;
    width: 100%;
    height: 500px;
    background-color: #EEEEEE;
    box-shadow: 0 0 6px 0 #ddd;
    margin-top: 20px;
    border-radius: 10px;
  }

  input {
    display: none;
  }
`;

const Text = styled.div`
  textarea {
    margin-top: 20px;
    width: 100%;
    height: 500px;
    resize: none;
    border: none;
    box-shadow: 0 0 6px #ddd;
    border-radius: 10px;
    font-size: 24px;
    padding: 20px;
  }
`;

const Button = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    width: 200px;
    height: 70px;
    border: none;
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.white};
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0 0 6px 0 ${props => props.theme.color.blue};
  }
`;

export default Write;