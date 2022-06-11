import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

const Main = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Content>
          <Categories>
            <Category>전체</Category>
            <Category>한식</Category>
            <Category>중식</Category>
            <Category>양식</Category>
            <Category>일식</Category>
          </Categories>
          <CardList>
            <Card>
              <CardImage>
                <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
              </CardImage>
              <CardContent>
                <CardLeft>
                  <CardSubject>
                    연어 스테이크 맛있게 만드는 법
                  </CardSubject>
                  <CardAuthor>
                    PSB
                  </CardAuthor>
                  <CardDate>
                    2015.05.14
                  </CardDate>
                </CardLeft>
                <CardRight>
                  <CardLike><FontAwesomeIcon icon={faHeart} /></CardLike>
                  <CardLikeCount>+ 2</CardLikeCount>
                </CardRight>
              </CardContent>
            </Card>
            <Card>
              <CardImage>
                <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
              </CardImage>
              <CardContent>
                <CardLeft>
                  <CardSubject>
                    연어 스테이크 맛있게 만드는 법
                  </CardSubject>
                  <CardAuthor>
                    PSB
                  </CardAuthor>
                  <CardDate>
                    2015.05.14
                  </CardDate>
                </CardLeft>
                <CardRight>
                  <CardLike><FontAwesomeIcon icon={faHeart} /></CardLike>
                  <CardLikeCount>+ 2</CardLikeCount>
                </CardRight>
              </CardContent>
            </Card>
            <Card>
              <CardImage>
                <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
              </CardImage>
              <CardContent>
                <CardLeft>
                  <CardSubject>
                    연어 스테이크 맛있게 만드는 법
                  </CardSubject>
                  <CardAuthor>
                    PSB
                  </CardAuthor>
                  <CardDate>
                    2015.05.14
                  </CardDate>
                </CardLeft>
                <CardRight>
                  
                </CardRight>
              </CardContent>
            </Card>
            <Card>
              <CardImage>
                <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
              </CardImage>
              <CardContent>
                <CardLeft>
                  <CardSubject>
                    연어 스테이크 맛있게 만드는 법
                  </CardSubject>
                  <CardAuthor>
                    PSB
                  </CardAuthor>
                  <CardDate>
                    2015.05.14
                  </CardDate>
                </CardLeft>
                <CardRight>
                </CardRight>
              </CardContent>
            </Card>
            <Card>
              <CardImage>
                <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
              </CardImage>
              <CardContent>
                <CardLeft>
                  <CardSubject>
                    연어 스테이크 맛있게 만드는 법
                  </CardSubject>
                  <CardAuthor>
                    PSB
                  </CardAuthor>
                  <CardDate>
                    2015.05.14
                  </CardDate>
                </CardLeft>
                <CardRight>
                </CardRight>
              </CardContent>
            </Card>
          </CardList>
        </Content>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
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

  & + & {
    margin-left: 10px;
  }
`;

const CardList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.li`
  width: calc(25% - 15px);
  height: 350px;
  box-shadow: 0 0 6px 0 #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
`;

const CardImage = styled.div`
  width: 100%;
  height: 245px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 250px);
`;

const CardLeft = styled.div`
  padding: 20px;
  width: 80%;
  height: 100%;
  flex-shrink: 0;
`;

const CardSubject = styled.div``;

const CardAuthor = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.color.heavyGrey};
`;

const CardDate = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.color.grey};
`;

const CardRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardLike = styled.div`
  font-size: 24px;
`;

const CardLikeCount = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

export default Main;