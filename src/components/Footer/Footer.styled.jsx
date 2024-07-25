import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaBp from './../../styles/breakpoints';

export const Container = styled.section`
  height: 501px;
  position: relative;
  padding: 20px 50px 0px 0px;
  overflow: hidden;
  div {
    padding: 0px 0px 0px 1170px;
  }
  ${mediaBp('tablet')} {
    height: 801px;
  }
  ${mediaBp('desktop')} {
    height: 931px;
  }
`;
