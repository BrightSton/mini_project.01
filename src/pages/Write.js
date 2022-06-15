import styled, { css } from "styled-components";
import Header from "../components/Header";
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { axiosPost } from "../axios/axiosData";

// import { getPostList } from "../axios/axiosPost";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { isLogin, nickname, username } = useSelector((state) => state.user);

  const subjectRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const ADD = "ADD";
  const MODIFY = "MODIFY";
  const [mode, setMode] = useState(ADD);
  const [activeCategory, setActiveCategory] = useState("k");

  const PostSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (mode === ADD) {
      formData.append("username", "test");
      formData.append("category", activeCategory);
      formData.append("image", imageRef.current.files[0]);
    }

    formData.append("title", subjectRef.current.value);
    formData.append("content", contentRef.current.value);

    const addr = "http://13.125.4.231";
    if (mode === ADD) {
      axios.post(
        `${addr}/api/posts`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      ).then(
        (response) => {
          console.log(response);
          navigate("/");
        }
      );
    } else {
      axios.put(
        `${addr}/api/posts/${params.id}`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      ).then(
        (response) => {
          console.log(response);
          navigate("/");
        }
      );
    }
  };

  const selectFile = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
      var img = document.getElementById("previewImage");
      img.setAttribute("src", e.target.result);
    }

    reader.readAsDataURL(e.target.files[0]);
  }

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  useEffect(() => {
    if (params.id) {
      setMode(MODIFY);
      axiosPost.getPostById(Number(params.id)).then((response) => {
        subjectRef.current.value = response.data.title;
        contentRef.current.value = response.data.content;
        var img = document.getElementById("previewImage");
        img.setAttribute("src", response.data.imageUrl);
      });
    }
  }, [params]);

  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <Form onSubmit={PostSubmit}>
            <Subject>
              <input type="text" placeholder="제목을 입력해주세요" ref={subjectRef} />
            </Subject>
            <Categories>
              {mode === ADD && [
                  {name: "한식", type: "k"},
                  {name: "중식", type: "c"},
                  {name: "양식", type: "a"},
                  {name: "일식", type: "j"}
                ].map(
                  (value, index) => {
                    return (
                      <Category 
                        key={index} 
                        isActive={activeCategory === value.type} 
                        onClick={() => {setActiveCategory(value.type)}}>
                        {value.name}
                      </Category>
                    );
                  }
                )}
            </Categories>
            <Image>
              <img id="previewImage" src="" alt="" />
              <label htmlFor="imageFile"></label>
              <input id="imageFile" type="file" accept="image/*" onChange={selectFile} ref={imageRef} />
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
  width: 100%;
  height: 800px;
  position: relative;
  margin: 30px 0;

  img {
    position: absolute;
    width: 100%;
    height: 800px;
    top: 0;
    border-radius: 10px;
  }

  img[src=""] {
    display: none;
  }

  img[src=""] + label {
    opacity: 1;
  }

  label {
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 800px;
    background-color: #EEEEEE;
    box-shadow: 0 0 6px 0 #ddd;
    border-radius: 10px;
    opacity: 0;
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


const Categories = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Category = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color .3s, background-color .3s;
  cursor: pointer;

  ${props => props.isActive && css`
    background-color: ${props => props.theme.color.whiteSmoke};
    color: ${props => props.theme.color.red};
  `}

  & + & {
    margin-left: 10px;
  }

  &:hover {
    color: ${props => props.theme.hoverColor.blue};
    background-color: ${props => props.theme.color.lightGrey};
  }
`;


export default Write;