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