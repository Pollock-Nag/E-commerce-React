import React from 'react'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards';
import { MDBCol } from 'mdb-react-ui-kit';
import '../Css/CustomerLists.css'
import Button from 'react-bootstrap/Button';

const customer_info = {
    name: "Pollock Nag",
    no_of_orders: 100
}
const order_info = {
    image: "https://5.imimg.com/data5/QV/MN/GO/SELLER-48652903/250ml-coca-cola-500x500.jpg",
    order_id: "Order #" + 1001,
    quantity: 2 + " ITEMS",
    price: 10200 + " INR",
    time: "Today " + "11:11 AM",
    payment_status: "paid",
    delivary_status: "pending"
}


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
                <Cards
                    info={order_info}
                />
            </div>
        </div>
    )
}

export default ManageOrders