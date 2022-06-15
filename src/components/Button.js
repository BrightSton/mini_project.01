import React from "react";
//CSS import
import styled, { css } from "styled-components";

//button styling
const StyledButton = styled.button`
  border: none;
  border-radious: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: #6d5dcd;
  &:hover {
    background: #4e4393;
  }

  /* fullWidth props = true */
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  /* fullWidth cyan = true */
  ${(props) =>
    props.cyan &&
    css`
      background: #444;
      &:hovre {
        background: #eee;
      }
    `}
`;

//Button 에 받아오는 props를 모두 styledButton에 전달한다는 의미
const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
