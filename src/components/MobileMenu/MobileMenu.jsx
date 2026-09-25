import styled, { keyframes } from 'styled-components';

import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

import * as Dialog from '@radix-ui/react-dialog';

const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <UnstyledButton>
          <Icon id="menu" />
          <VisuallyHidden>Menu</VisuallyHidden>
        </UnstyledButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby="">
          <Dialog.Close asChild>
            <DismissButton>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </DismissButton>
          </Dialog.Close>
          <Dialog.Title>
            <VisuallyHidden>Menu</VisuallyHidden>
          </Dialog.Title>
          <Nav>
            <NavLink
              href="/sale"
              data-active
            >
              Sale
            </NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(var(--hsl-gray-700) / 0.8);

  &[data-state='open'] {
    animation: ${fadeIn} 200ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 200ms ease-out;
  }
`;

const DialogContent = styled(Dialog.Content)`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-white);
  padding: 32px;
  width: 300px;

  &[data-state='open'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${slideOut} 200ms ease-out;
  }
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);
  font-size: ${18 / 16}rem;

  &[data-active] {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-self: flex-end;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`;
