import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const stylee =
    {
        fontWeight: "bold",
        color: "goldenrod",
        border: "4px solid black",
        backgroundColor: "black",
        margin: "5px",
    }

    const style2 = {
        borderRadius: "5px",
        fontWeight: "bold",
        padding: '10px',
        textDecoration: 'none',
        color: 'black',
        backgroundColor: "white",
        margin: "5px",
    }


    return (
        <div>
            <div className="header">
                <h3 className="textMain">Loan Application Form</h3>
            </div>
            <div>
                <Navbar bg="secondary">
                    <Container className="justify-content-center">
                        {/* <Nav> */}
                        <NavLink style={style2} to="/tab1" activeStyle={stylee}>Tab1</NavLink>

                        <NavLink style={style2} to="/tab2" activeStyle={stylee}>Tab2</NavLink>

                        <NavLink style={style2} to="/tab3" activeStyle={stylee}>Tab3</NavLink>

                        {/* </Nav> */}
                    </Container>
                </Navbar>
            </div>
        </div >
    );
};

export default Header;