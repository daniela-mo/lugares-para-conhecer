import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentSquare = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
`;

export const Result = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 40px 20px 20px 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  color: #4f9419;
  text-align: left;
`;

export const NomePais = styled.strong`
  margin-top: 11px;
`;

export const Edit = styled.div`
  display: flex;
`;

export const Bandeira = styled.img`
  width: 56px;
  height: 34px;
`;

export const Border = styled.div`
  margin: 20px 0 30px 0;
  border-top: 2px solid #ababab;
`;

export const Text = styled.div`
  display: flex;
  width: 150pxn;
  flex-direction: column;
  margin-left: 20px;
`;

export const P = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1px;
  text-align: left;
  color: #000000;
`;
