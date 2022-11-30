import React from 'react'
import '../Css/PaymentOverview.css'
const PaymentOverview = () => {
    return (
        <div>
            <div className="row p-2">
                <div className="col-sm-3">

                    <div className="card" id='paymentOverviewLeft'>
                        <div className="card-body">
                            <p className="card-text">AMOUNT ON HOLD</p>
                            <h5 className="card-title">701 INR</h5>


                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" id='paymentOverviewRight'>
                        <div className="card-body">
                            <p className="card-text ">AMOUNT RECEIVED</p>
                            <h5 className="card-title">2319 INR</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview