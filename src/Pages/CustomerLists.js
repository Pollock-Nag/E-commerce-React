import React from 'react'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards';
import '../Css/CustomerLists.css'
import { customer_info } from "../Data/CustomerInfo"
import NavigationBar from '../Components/NavigationBar';

const CustomerLists = () => {
    return (
        <div >
            <NavigationBar />
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
                {customer_info.map(function showcards(element) {
                    return (
                        <Cards info={element} />
                    );
                })}
            </div>


        </div >



    )
}

export default CustomerLists