import React from 'react'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards';
import { MDBCol } from 'mdb-react-ui-kit';
import '../Css/CustomerLists.css'
import Button from 'react-bootstrap/Button';
import { order_info } from "../Data/OrderInfo"


console.log()

const ManageOrders = () => {
    return (
        <div>
            <div className='header'>
                <h3>Manage Orders</h3>
                <br></br>
                <SearchBar
                    placeholderName={"Order ID, Mobile Number or a Name.."}
                />
                <br></br>
                <br></br>

            </div>
            <br></br>
            <div>
                <div className="d-flex align-items-start mb-3" style={{
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
            <div className='body'>
                {order_info.map(function (elem) {
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

export default ManageOrders