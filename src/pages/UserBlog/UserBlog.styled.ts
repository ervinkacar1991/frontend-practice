import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardItem = styled.div`
  width: 100%;
  height: 70vh;
  max-width: 700px;
  border: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
  padding: 20px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ececec;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
`;

export const Main = styled.div`
  p {
    line-height: 20px;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DatePostedContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  background-color: #e0bad7;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #48bf84;
  margin-left: 15px;
  &:hover {
    color: green;
  }
`;
export const ActionSvg = styled.svg`
  width: 24px;
  height: 24px;
  color: #48bf84;

  cursor: pointer;
  margin-left: 15px;
  &:hover {
    color: #439775;
  }
`;
