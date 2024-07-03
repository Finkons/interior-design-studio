import React from 'react';
import { useState, useEffect } from 'react';
import { Paragraph, Container, ProgressBar, ProgressBarContainer, Logo } from './LoadingPage.styled';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
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
      <Logo initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 5 }} />
      <Paragraph>{progress}%</Paragraph>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </Container>
  );
};

export default LoadingPage;
