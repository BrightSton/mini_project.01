/* // useEffect import
import React, { useEffect } from "react";
// useSelector, useDispatch import
import { useDispatch, useSelector } from "react-redux";
// auth module 액션 생성함수 import
import { changeField, initializeForm } from "../../modules/auth";
// AuthForm import
import AuthForm from "../../components/auth/AuthForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((auth) => ({
    form: auth.register,
  }));
  // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
  const onChange = (e) => {
    const { value, name } = e.target;
    // 액션 생성 함수 import
    dispatch(
      changeField({
        form: "register",
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
    dispatch(initializeForm("register"));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={{ form }}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm; */

import React from "react";
import axios from "axios";

const SignupForm = () => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const nickName = React.useRef(null);

  const callSingup = () => {
    let data = {
      _id: id_ref.current.value,
      pw: pw_ref.current.value,
      nickname: nickName.current.value,
    };

    axios.post("http://localhost:5001/signup", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      아이디 : <input ref={id_ref} /> <br />
      비번 : <input ref={pw_ref} /> <br />
      닉네임:
      <input ref={nickName} /> <br />
      <button onClick={callSingup}>회원가입</button>
    </div>
  );
};

export default SignupForm;
