import React from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
//import LoginForm from "../containers/auth/LoginForm";

import axios from "axios";
import { useDispatch } from "react-redux";
import { loadUserDB } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const dispatch = useDispatch();
  const callLogin = () => {
    let users = {
      username: id_ref.current.value,
      password: pw_ref.current.value,
    };
    console.log(users);
    dispatch(loadUserDB(users));
  };

  const callResgister = () => {
    window.location.replace("/register");
  };

  return (
    <AuthTemplate>
      <div>
        아이디 : <input ref={id_ref} /> <br />
        비번 : <input ref={pw_ref} /> <br />
        <button
          onClick={() => {
            callLogin();
            console.log(callLogin, "로그인 버튼");
          }}
        >
          로그인
        </button>
        <button onClick={callResgister}>회원가입</button>
      </div>
    </AuthTemplate>
  );
};

export default Login;

//<LoginForm/> --> AuthTemplate안에 넣어야 함.
/* // useEffect import
import React, { useEffect } from "react";
// useSelector, useDispatch import
import { useDispatch, useSelector } from "react-redux";
// auth module 액션 생성함수 import
import { changeField, initializeForm } from "../../modules/auth";
// AuthForm import
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((auth) => ({
    form: auth.login,
  }));
  // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
  const onChange = (e) => {
    const { value, name } = e.target;
    // 액션 생성 함수 import
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };
  // form submit event
  const onSubmit = (e) => {
    e.preventDefault();
    // 구현 예정
  };
  // 컴포넌트 초기 렌더링시 form 초기화
  useEffect(() => {
    // 액션 생성 함수 import
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={{ form }}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm; */
