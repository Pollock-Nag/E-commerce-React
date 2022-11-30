import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

const NavigationBar = () => {

    let user_phone_number = localStorage.getItem("user")
    console.log(user_phone_number)
    var customerLists_nav = "/CustomerLists/" + user_phone_number
    var manageOrders_nav = "/ManageOrders/" + user_phone_number
    var onlinePayment_nav = "/OnlinePayments/" + user_phone_number
    return (

        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >~My Ecommerce~</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={customerLists_nav} >Customer Lists</Nav.Link>
                            <Nav.Link href={manageOrders_nav}>Manage Orders</Nav.Link>
                            <Nav.Link href={onlinePayment_nav}>Online Payment</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar



