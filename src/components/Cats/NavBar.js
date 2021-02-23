import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Jumbotron, Container, Nav, NavItem, NavLink } from 'reactstrap';
import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const history = useHistory()

    const handleLogOutBtn = () => {
        history.push(``)
        localStorage.clear()
    }

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <div>
                <Jumbotron fluid>
                    <Navbar color="faded" className="float-right" light>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/cats">View All Cats</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/cats/create">Add A Cat</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleLogOutBtn} >Log Out</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Container fluid>
                        <h1 className="display-3">CATStone</h1>
                        <div>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        </>
    );
}

