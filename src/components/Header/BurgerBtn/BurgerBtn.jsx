import React from 'react';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { StyledBtn } from './BurgerBtn.styled';

const BurgerBtn = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBtn open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBtn>
      <BurgerMenu open={open} closeMenu={closeMenu} />
    </>
  );
};

export default BurgerBtn;
