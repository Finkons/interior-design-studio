import React from "react";
import { useState, useEffect } from "react";
import {
  Paragraph,
  Container,
  ProgressBar,
  ProgressBarContainer,
} from "./LoadingPage.styled";

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 1000);
        }
        return newProgress;
      });
    }, 30); // Increase every 30ms

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <Container>
      <Paragraph>Loading... {progress}%</Paragraph>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </Container>
  );
};

export default LoadingPage;
