import React from 'react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import "../Css/HomePage.css";

import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div className='HomePageBody'>
            <>

                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3 class="animate-charcter"> My Ecommerce</h3>
                        </div>
                    </div>
                </div>

                <br></br>
                <Container>

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col><Login></Login></Col>
                        <Col><Signup></Signup></Col>


                    </Row>
                </Container>
            </>

        </div>
    )
}

export default HomePage