import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardItem = styled.div`
  width: 100%;
  max-width: 700px;
  border: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Main = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
`;

export const Detail = styled.div`
  width: 100%;
  height: 100px;
  font-size: 14px;
  color: #666;
`;
export const Button = styled.button``;
