import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isLogin, setIsLogin] = useState(false);

  const deleteToken = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  useEffect(() => {
    if (user.isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  return (
    <Container>
      <h1>
        <Link to="/">Food Recipe</Link>
      </h1>
      <nav>
        <ul>
          {isLogin ? (
            <li>
              <Logout onClick={deleteToken}>로그아웃</Logout>
            </li>
          ) : (
            <li>
              <Link to="/login">로그인</Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;

  h1 {
    font-size: 48px;
    transition: color 0.3s;
    cursor: pointer;
  }

  h1:hover {
    color: ${(props) => props.theme.color.heavyGrey};
  }

  nav {
    display: flex;
    align-items: center;

    a {
      padding: 20px 30px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.color.blue};
      color: ${(props) => props.theme.color.white};
      transition: color 0.3s, background-color 0.3s;
    }

    a:hover {
      background-color: ${(props) => props.theme.hoverColor.blue};
    }
  }
`;

const Logout = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  background-color: ${props => props.theme.color.red};
  color: ${props => props.theme.color.white};
  transition: color .3s, background-color .3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hoverColor.red};
  }
`;

export default Header;
