import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Card from "../components/Card";

import { axiosPost } from "../axios/axiosData";

const Main = () => {
  const [postList, setPostList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    if (activeCategory === "ALL") {
      axiosPost.getPost().then((response) => {
        setPostList(response.data);
      }, []);
    } else {
      axiosPost.getPostListByCategory(activeCategory).then((response) => {
        setPostList(response.data);
      }, []);
    }
  }, [activeCategory]);

  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <TopView>
            <Categories>
              {/* 5가지 카테고리 반복 생성 k 한식 c 중식 a 양식 j 일식 */}
              {
              [
                {name:"전체", type: "ALL"},
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
            <Link to="/write"><Button>추가하기</Button></Link>
          </TopView>
          <CardList>
            {postList.map((post, index) => {
              return (<Card key={index} post={post} />)
            })}
          </CardList>
        </Content>
      </Box>
    </Container>
  )
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

const TopView = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 100px;
  height: 100%;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.color.purple};
  color: ${props => props.theme.color.white};
  transition: color .3s, background-color .3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.lightGrey};
    color: ${props => props.theme.color.black};
  }
`;

const Categories = styled.div`
  display: flex;
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

const CardList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default Main;