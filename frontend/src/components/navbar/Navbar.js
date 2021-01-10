import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    
  const navItems = [
      {
          to: '/',
          name: 'Спомени'
      },
      {
          to: '/about',
          name: 'Информация'
      }
  ]
  
  const navElements = navItems.map((element, index) => {
      return <NavItem key={index}>
          <NavLink tag={Link} to={element.to}>{element.name}</NavLink>
      </NavItem>
  })

  return (
    <Navbar color="light" light expand="md">
        <div className="container">
            <NavbarBrand tag={Link} to="/">
                Memories
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {navElements}
                </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default NavBar;
