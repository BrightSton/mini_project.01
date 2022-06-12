import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPostList, getPostListByCategory } from "../redux/modules/post";
import Card from "../components/Card";

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.list);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    if (activeCategory === 0) {
      dispatch(getPostList());
    } else {
      dispatch(getPostListByCategory(activeCategory));
    }
  }, [activeCategory]);

  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <TopView>
            <Categories>
              {/* 5가지 카테고리 반복 생성 */}
              {["전체", "한식", "중식", "양식", "일식"].map((value, index) => {
                  return (<Category key={index} isActive={activeCategory === index} onClick={() => {setActiveCategory(index)}}>{value}</Category>)
              })}
            </Categories>
            <Link to="/write"><Button>추가하기</Button></Link>
          </TopView>
          <CardList>
            {posts.map((post, index) => {
              return (
                <Card key={index} post={post}></Card>
              )
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