import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "./로그인표지.jpeg";

//palette import

//회원가입, 로그인 페이지의 레이아웃

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
      rgba(0.2, 0.2, 0.2, 0.2),
      rgba(0, 0, 0, 0.7)
    ),
    url(${image});
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    color: #eee;
    /* 글자 간격 */
    letter-spacing: 2px;
  }
`;

// white box

const WhiteBox = styled.div`
  /* 윤곽선 4면 전부 그림자로 입체감줌 */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  // 부모 컴포넌트 안에 있는 자식 컴포넌트 요소 띄우기
  return (
    <AuthTemplateBlock>
      {/* 전부 스타일 컴포넌트로 만들어주지 않고 가독성을 위해 css selector 사용 */}
      <div className="logo-area">
        <Link to="/">FOOD RECIEPE</Link>
      </div>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
