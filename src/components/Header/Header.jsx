import { useState } from "react";
import { HeaderContainer, Logo, Nav, NavBarMobile, NavLink, NavLinks, MobileMenu, MobileNavLinks, MobileNavLink } from "./Header.styled";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    closeMobileMenu();
  };



  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo onClick={() => handleScrollTo('home')}>Meu Portfólio</Logo>
          <NavLinks>
            <NavLink onClick={() => handleScrollTo('home')}>Home</NavLink>
            <NavLink onClick={() => handleScrollTo('about')}>Sobre Mim</NavLink>
            <NavLink onClick={() => handleScrollTo('workflow')}>Workflow</NavLink>
            <NavLink onClick={() => handleScrollTo('projects')}>Projetos</NavLink>
            <NavLink onClick={() => handleScrollTo('skills')}>Skills</NavLink>
            <NavLink onClick={() => handleScrollTo('faq')}>FAQ</NavLink>
            <NavLink onClick={() => handleScrollTo('contact')}>Contato</NavLink>
          </NavLinks>

          <NavBarMobile onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </NavBarMobile>
        </Nav>
        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileNavLinks>
            <MobileNavLink onClick={() => handleScrollTo('home')}>Home</MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('about')}>Sobre Mim</MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('workflow')}>Workflow</MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('projects')}>Projetos</MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('skills')}>Skills</MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('faq')}>FAQ</MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('contact')}>Contato</MobileNavLink>
          </MobileNavLinks>
        </MobileMenu>
      </HeaderContainer>


    </>
  );
}

export default Header;