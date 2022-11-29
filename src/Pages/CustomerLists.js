import React from 'react'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards';
import '../Css/CustomerLists.css'
import { customer_info } from "../Data/CustomerInfo"

console.log(customer_info)
function showcards(element) {
    return (
        <Cards
            info={element}
        />

    );
}
const CustomerLists = () => {
    return (
        <div >

            <div className='header'>
                <h3>My Customers</h3>
                <br></br>
                <SearchBar
                    placeholderName={"Search by customers name..."}
                />
                <br></br>
                <br></br>

            </div>
            <br></br>
            <div className='body'>
                {customer_info.map(showcards)}
            </div>


        </div >



    )
}

export default CustomerLists