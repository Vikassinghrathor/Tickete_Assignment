import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import HeaderLogo from '../../assets/Company_Logo.svg';
import Lock from '../../assets/Lock.svg';
import QuestionHelp from '../../assets/Question.svg';
import HeaderTimer from './HeaderTimer';

const Header = () => {
  return (
    <>
    <BootstrapNavbar>
      <Container>
        <Nav className="justify-content-between align-items-center w-100">
          <Nav.Item>
            <Image src={HeaderLogo} alt="Header Logo" fluid />
          </Nav.Item>

          {/* Lock and Checkout */}
          <Nav.Item className="d-flex align-items-center">
            <Image src={Lock} alt="Lock Icon" fluid />
            <Nav.Link className="text-center">Checkout</Nav.Link>
          </Nav.Item>

          {/* Question and Help */}
          <Nav.Item className="d-flex align-items-center">
            <Image src={QuestionHelp} alt="Question Icon" fluid />
            <Nav.Link className="text-center">Help</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </BootstrapNavbar>
    <HeaderTimer/>
    </>
  );
};

export default Header;
