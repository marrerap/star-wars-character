import React from 'react'
import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container><NavbarBrand>Star Wars Characters</NavbarBrand></Container>
            <NavLink href="/">Character-List</NavLink>
           
        </Navbar>
    )
}

