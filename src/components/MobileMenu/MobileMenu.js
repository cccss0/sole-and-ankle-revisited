/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton>
          <DialogIcon id="close" onClick={onDismiss}>
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          </DialogIcon>
        </CloseButton>

        <NavMenu>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavMenu>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  background-color: hsla(220deg 5% 40% / 0.8);
  width: 100%;
  height: 100%;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: 300px;
  background-color: ${COLORS.white};
  padding: 30px;

  display: flex;
  flex-direction: column;
`;

const NavMenu = styled.nav`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;

  & > a {
    color: ${COLORS.black};
    text-decoration: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding-bottom: 15px;
  }

  a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  & > a {
    color: ${COLORS.gray[500]};
    text-decoration: none;
    font-size: 0.9rem;
    padding-bottom: 10px;
  }
`;

const DialogIcon = styled(Icon)``;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;
