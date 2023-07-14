import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  margin: 3px;
  padding: 10px 20px;
  background-color: #fca5a5;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const ErrorLabel = styled.div`
  padding: 5px;
  color: #ff0000;
  font-size: 10px;
`