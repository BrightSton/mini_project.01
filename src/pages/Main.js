import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <Header>
        <h1>Food Recipe</h1>
        <nav>
          <ul>
            <li><Link to="/">로그인</Link></li>
          </ul>
        </nav>
      </Header>
      <Content></Content>
    </Container>
  )
}

const Container = styled.div``;

const Header = styled.div`
  h1 {
    font-size: 36px;
  }
  
  
`;

const Content = styled.div``;

export default Main;