import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 2.5rem;
  color: #2e2e2e;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(223, 221, 221, 0.8);
  height: 100vh;
  margin: -10px;
`;

export const ProgressBarContainer = styled.div`
  width: 310px;
  height: 16px;
  border-radius: 12px;
  background-color: #fdf6f6;
`;

export const ProgressBar = styled.div`
  width: ${(props) => `calc(${props.progress}px*3.1)`};
  background-color: #2e2e2e;
  height: 16px;
  border-radius: 12px;
`;
