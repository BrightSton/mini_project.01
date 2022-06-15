import React from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
//import RegisterForm from "../containers/auth/RegisterForm";
import { useDispatch } from "react-redux";
import users, { signupUserDB } from "../redux/modules/user";

const Register = () => {
  const id_ref = React.useRef(null);
  const nickName = React.useRef(null);
  const pw_ref = React.useRef(null);
  const pwCheck_ref = React.useRef(null);

  const dispatch = useDispatch();
  const callSingup = () => {
    let data = {
      username: id_ref.current.value,
      nickname: nickName.current.value,
      password: pw_ref.current.value,
      pwCheck: pwCheck_ref.current.value,
      isLogin: false,
    };
    console.log(data);
    dispatch(signupUserDB(data));
  };

  return (
    <AuthTemplate>
      <div>
        아이디 : <input ref={id_ref} /> <br />
        닉네임: <input ref={nickName} /> <br />
        비번 : <input ref={pw_ref} /> <br />
        비번 확인 : <input ref={pwCheck_ref} /> <br />
        <button onClick={callSingup}>회원가입</button>
      </div>
    </AuthTemplate>
  );
};

export default Register;

/* 
//RegisterForm --> AuthTemplate안에 넣어야 함.
 // useEffect import
 import React from "react";
 // useSelector, useDispatch import
 import { useDispatch } from "react-redux";
 
 
 
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