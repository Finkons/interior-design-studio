import React from 'react';
import { AnimatePresence, AtimatePresence } from 'framer-motion';
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
      <AnimatePresence>
        <Logo initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 0, scale: 0.9 }} transition={{ duration: 5, ease: 'easeOut' }} />
        <Paragraph>{progress}%</Paragraph>
        <ProgressBarContainer>
          <ProgressBar progress={progress} />
        </ProgressBarContainer>
      </AnimatePresence>
    </Container>
  );
};

export default LoadingPage;
