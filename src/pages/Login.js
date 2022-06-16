import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

import { useDispatch } from "react-redux";
import { loadUserDB } from "../redux/modules/user";

const Login = () => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const dispatch = useDispatch();

  const callLogin = () => {
    let users = {
      username: id_ref.current.value,
      password: pw_ref.current.value,
    };
    console.log(users, "callLogin 값");
    dispatch(loadUserDB(users));
  };

  return (
    <AuthTemplate>
      <AuthFormBlock>
        <BoxArea>LOGIN</BoxArea>

        {/* autocomplete 속성 >> 인풋에 자동완성하는 속성 
       username 은 사용자 이름 , new-password 는 보통 비밀번호 자동완성 막기 위해서
        새로운 비밀번호나 비밀번호 확인란에 들어간다고 함. 
        input onChange, value
        */}
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          ref={id_ref}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          ref={pw_ref}
        />

        <ButtonWithMarginTop fullWidth onClick={callLogin}>
          LOGIN
        </ButtonWithMarginTop>

        <Footer>
          <Link to="/register">SIGN UP</Link>
        </Footer>
      </AuthFormBlock>
    </AuthTemplate>
  );
};

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #444;
    margin-bottom: 1rem;
  }
`;

//button margin
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1.5rem;
  border-radius: 10px;
  fonst-size: 36px;
  width: 100%;
  height: 5rem;
`;

//styled input

const StyledInput = styled.input`
font-size: 25px;
border:none;
border-bottom: 1px solid #444;
padding-bottom: 1rem;
outline:none;
width: 100%
    &:focus{
        color: $oc-teal-7;
        border-bottom: 1px solid #444;
    }
    &+&{
        margin-top:1rem;
    }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: 1px solid #6d5dcd;
    text-decoration: underline;
    &:hover {
      color: 1px solid #487fd1;
    }
  }
`;

const BoxArea = styled.div`
  display: block;
  padding-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  color: #444;
  /* 글자 간격 */
  letter-spacing: 2px;
`;

export default Login;
