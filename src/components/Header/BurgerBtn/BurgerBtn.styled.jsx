import styled from 'styled-components';
import mediaBp from '../../../styles/breakpoints';

// export const StyledBtn = styled.div`
//   width: 2.5rem;
//   height: 2.5rem;
//   position: fixed;
//   top: 20px;
//   right: 15%;
//   display: flex;
//   justify-content: space-around;
//   flex-flow: column nowrap;
//   z-index: 205;

//   ${mediaBp('tablet')} {
//     display: none;
//   }
//   ${mediaBp('desktop')} {
//     display: none;
//   }

//   div {
//     width: 2.5rem;
//     height: 0.25rem;
//     background-color: white;
//     border-radius: 10px;
//     transform-origin: 1px;
//     transition: all 0.3s linear;

//     &:nth-child(1) {
//       transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     &:nth-child(2) {
//       transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
//       opacity: ${({ open }) => (open ? 0 : 1)};
//     }

//     &:nth-child(3) {
//       transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `;

export const StyledBtn = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 20px;
  right: 15%;
  // border: 1px solid black;
  display: flex;
  cursor: pointer;
  z-index: 205;

  ${mediaBp('tablet')} {
    display: none;
  }
  ${mediaBp('desktop')} {
    display: none;
  }
`;

export const Burger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
`;

export const CrossBtn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`;
