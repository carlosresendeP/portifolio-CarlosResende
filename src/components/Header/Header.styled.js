import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.neutral[950]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.opacity};
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;
  transition: all 0.25s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.div`
  color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const NavBarMobile = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
    display: block;
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral[100]};
    transition: all 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[600]};
    }
  }
`;

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.neutral[950]};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none !important;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const MobileNavLink = styled.div`
  color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  transition: all 0.25s ease;

  
  &:hover {
    background: ${({ theme }) => theme.colors.neutral[900]};
    color: ${({ theme }) => theme.colors.primary[600]};
  }
  
  &:last-child {
    border-bottom: none;
  }
`;