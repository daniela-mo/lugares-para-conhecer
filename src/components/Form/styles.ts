import styled from "styled-components";
import InputMask from "react-input-mask";

export const FormComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #4f9419;
`;

export const Form = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
`;

export const Select = styled.select`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 7px;
`;

export const Option = styled.option`
  font-size: 16px;
  font-family: Roboto;
`;

export const Input = styled.input`
  padding: 13px 20px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
`;

export const MaskInput = styled(InputMask)`
  padding: 13px 20px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
`;

export const Button = styled.button`
  padding: 10px 50px;
  border-radius: 7px;
  border: none;
  font-size: 16px;
  background-color: #006c18;
  color: #fff;
  cursor: pointer;
`;
