import React from 'react'
import { Nav, NavigationBarContainer, NavigationLogo } from './NavbarElements';


const NavigationBar = () => {
  return (
    <>
        <Nav>
            <NavigationBarContainer>
                <NavigationLogo to='/'>
                    dolla
                </NavigationLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavigationBarContainer>
        </Nav>
    </>
  )
}

export default NavigationBar;