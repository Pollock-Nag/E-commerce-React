import React from 'react'
import '../Css/CustomerLists.css'
import '../Css/PaymentOverview.css'
import { MDBCol } from 'mdb-react-ui-kit'
import Button from 'react-bootstrap/Button'
import DropDown from '../Components/DropDown'
import PaymentOverview from '../Components/PaymentOverview'
import Cards from '../Components/Cards'
import { payment_info } from '../Data/PaymentData'
import NavigationBar from '../Components/NavigationBar';

const OnlinePayments = () => {
    return (
        <div>
            <NavigationBar />
            <div className='header'>
                <h3>Online Payments</h3>
                <br></br>
                <br></br>
            </div>
            <div className='Dropdown'>
                <div className="payment">
                    <div className='paymentText'>Default Method</div>
                    <div><DropDown
                        name="Choose One" /></div>

                </div>
                <div>
                    <div className="payment">
                        <div className='paymentText'>Payment Profile</div>
                        <div><DropDown
                            name='Both Option' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='PaymentOverview'>
                <p className='Text'>Payment Overview</p>
                <div><PaymentOverview /></div>
            </div>

            <div className='Transaction'>
                <div className='Text'>Transaction</div>
                <div className="d-flex align-items-start mb-3 p-2" style={{
                    height: "30px",
                    width: "230px"
                }}>

                    <MDBCol><Button size="sm" variant="outline-primary">
                        Alltime
                    </Button></MDBCol>
                    <MDBCol><Button size="sm" variant="outline-primary">
                        Today
                    </Button></MDBCol>
                    <MDBCol><Button size="sm" variant="outline-primary">
                        Yestarday
                    </Button></MDBCol>
                </div>
            </div>

            <div className='cards'>
                <br></br>
                {payment_info.map(function (elem) {
                    return (
                        <Cards
                            info={elem}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default OnlinePayments