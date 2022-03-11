import styled from "styled-components";
import InputMask from "react-input-mask";

export const Modal = styled.div`
  width: 300px;
  height: 300px;
  justify-content: center;
  background-color: #fff;
  border-radius: 7px;
  z-index: 999;
  position: absolute;
  top: 30%;
  left: 40%;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentSquare = styled.div``;

export const Result = styled.div`
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Buttons = styled.button`
  margin-right: 5px;
  border: none;
  background-color: transparent;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 5px 50px;
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const NomePais = styled.strong`
  margin-top: 5px;
`;

export const Edit = styled.div``;

export const Bandeira = styled.img`
  width: 56px;
  height: 34px;
`;

export const Border = styled.div`
  margin: 0 5px;
  border-top: 2px solid #ababab;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 5px;
`;

export const P = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  color: #000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
`;

export const Input = styled.input`
  padding: 12px 10px;
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 15px;
  border-radius: 7px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const MaskInput = styled(InputMask)`
  padding: 12px 8px;
  margin-left: 12px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 7px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
