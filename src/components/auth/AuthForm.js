import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

//로그인과 회원가입 폼을 보여줌.

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #444;
    margin-bottom: 1rem;
  }
`;

//button margin
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

//styled input

const StyledInput = styled.input`
font-size:1rem;
border:none;
border-bottom: 1px solid #444;
padding-bottom: 0.5rem;
outline:none;
width: 100%
    &:focus{
        color: $oc-teal-7;
        border-bottom:1px solid #444;
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

//type
//로그인과 회원가입 타입을 나눠서 text도 바꿔줌
const textMap = {
  login: "LOGIN",
  register: "REGISTER",
};

//회원가입, 로그인 페이지의 레이아웃

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  // 하나의 컴포넌트로 로그인, 회원가입을 띄우기 위해 type이라는 props 설정.
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <BoxArea>{text}</BoxArea>
      {/* form onSubmit */}
      <form onSubmit={onSubmit}>
        {/* autocomplete 속성 >> 인풋에 자동완성하는 속성 
       username 은 사용자 이름 , new-password 는 보통 비밀번호 자동완성 막기 위해서
        새로운 비밀번호나 비밀번호 확인란에 들어간다고 함. 
        input onChange, value
        */}
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {/* type 이 회원가입이면, 비밀번호 확인 인풋 추가 */}
        {type === "register" && (
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          ) && (
            <StyledInput
              autoComplete="nickname"
              name="nickname"
              placeholder="닉네임 적어주세요"
              type="nickname"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
        <ButtonWithMarginTop fullWidth>{text}</ButtonWithMarginTop>
      </form>
      <Footer>
        {/*링크도 타입에 따라 회원가입과 로그인이 다르게 설정. */}
        {type === "login" ? (
          <Link to="/register">SIGN UP</Link>
        ) : (
          <Link to="/login">SIGN IN</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
