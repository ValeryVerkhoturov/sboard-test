import styled from "styled-components";

export const FormContainer = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;