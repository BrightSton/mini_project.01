import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <h1>Food Recipe</h1>
      <nav>
        <ul>
          <li><Link to="/">로그인</Link></li>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;

  h1 {
    font-size: 48px;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      padding: 15px;
      background-color: ${props => props.theme.color.blue};
      color: ${props => props.theme.color.white}
    }
  }
`;

export default Header;