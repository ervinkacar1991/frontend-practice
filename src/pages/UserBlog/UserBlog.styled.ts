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
  height: 60vh;
  max-width: 550px;
  border: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ececec;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h3`
  font-weight: bold;
  text-align: center;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: white;
  p {
    line-height: 20px;
    padding: 15px;
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
