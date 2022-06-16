import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import axios from "axios";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const id_ref = React.useRef(null);
  const nickName = React.useRef(null);
  const pw_ref = React.useRef(null);

  const callSingup = () => {
    let data = {
      username: id_ref.current.value,
      nickname: nickName.current.value,
      password: pw_ref.current.value,
    };
    console.log(data);
    axios
      .post("http://13.125.4.231/user/signup", data)
      .then((response) => {
        if (response.data.result) {
          //console.log(response, "회원가입");
          window.alert(response.data.errorMsg);
          window.location.replace("/login");
        } else {
          window.alert(response.data.errorMsg);
        }
      })
      .catch((error) => console.log(error, "회원가입 안됨"));
  };

  return (
    <AuthTemplate>
      <AuthFormBlock>
        <BoxArea>REGISTER</BoxArea>
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
          autoComplete="nickname"
          name="nickname"
          placeholder="닉네임 적어주세요"
          ref={nickName}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          ref={pw_ref}
        />
        <ButtonWithMarginTop fullWidth onClick={callSingup}>
          REGISTER
        </ButtonWithMarginTop>
        <Footer>
          <Link to="/login">SIGN IN</Link>
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

export default Register;
