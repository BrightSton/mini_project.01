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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import user, { loadUserDB } from "../../redux/modules/user";

const LoginForm = () => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const dispatch = useDispatch();

  const [is_login, setIs_login] = useState(false);

  const user_list = useSelector((state) => state.user);
  console.log(user_list);

  const callLogin = () => {
    let users = {
      username: id_ref.current.value,
      password: pw_ref.current.value,
    };
    //console.log(users);
    dispatch(loadUserDB(users));
  };

  const callLogout = () => {
    axios.get("http://localhost:5001/signup/1").then((response) => {
      localStorage.removeItem("nickname");
    });
  };

  return (
    <div>
      아이디 : <input ref={id_ref} /> <br />
      비번 : <input ref={pw_ref} /> <br />
      <button
        onClick={() => {
          callLogin();
          console.log("이 지점");
        }}
      >
        로그인
      </button>
      <button onClick={callLogout}>로그아웃</button>
    </div>
  );
};

export default LoginForm;
