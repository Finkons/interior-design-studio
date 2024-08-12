import React from 'react';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { StyledBtn, CrossBtn, Burger } from './BurgerBtn.styled';

const BurgerBtn = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBtn onClick={() => setOpen(!open)}>
        {open ? (
          <CrossBtn>
            <div></div>
            <div></div>
            <div></div>
          </CrossBtn>
        ) : (
          <Burger>
            <div></div>
            <div></div>
            <div></div>
          </Burger>
        )}
      </StyledBtn>
      <BurgerMenu open={open} closeMenu={closeMenu} />
    </>
  );
};

export default BurgerBtn;
