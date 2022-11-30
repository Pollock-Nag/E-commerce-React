import React from 'react'
import Card from 'react-bootstrap/Card';
import '../Css/CustomerLists.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


const Cards = (props) => {
    return (
        <MDBCard style={{ maxWidth: '900px' }}>
            <MDBRow className='g-1'>
                <MDBCol md='2'>
                    <MDBCardImage src={props.info.image} alt='...' fluid />
                </MDBCol>
                <MDBCol md='7'>
                    <MDBCardBody>
                        <MDBCardTitle>{props.info.name}</MDBCardTitle>
                        <MDBCardTitle>{props.info.order_id}</MDBCardTitle>
                        <MDBCardText>
                            {props.info.no_of_orders}
                        </MDBCardText>
                        <MDBCardText>
                            <div>{props.info.quantity}</div>
                            <div className='priceColor'>{props.info.price}</div>
                        </MDBCardText>
                        <MDBCardText>
                            <div>{props.info.date_time}</div>
                        </MDBCardText>



                    </MDBCardBody>
                </MDBCol>
                <MDBCol md='3'>
                    <div className='paymentStatus'>
                        <div>{props.info.time}</div>
                        <div className='priceColor'>{props.info.payment_price}</div>
                        <br></br>
                        <div>{props.info.order_payment_status}</div>
                        <div>{props.info.payment_status}</div>

                    </div>


                </MDBCol>



            </MDBRow>

            <MDBRow>
                <div class="m-4">{props.info.delivary_status}</div>
            </MDBRow>
        </MDBCard>
    )
}

export default Cards