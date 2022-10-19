import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'


const NavigationBar = () => {
  return (
    <Navbar variant='dark'>
        <Container>
            <Navbar.Brand><strong>Y-Films</strong></Navbar.Brand>
            <Nav>
                <Nav.Link href='#trend' className='posisi'>TRENDING</Nav.Link>
                <Nav.Link href='#Superhero' className='posisi'>SUPERHERO</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavigationBar