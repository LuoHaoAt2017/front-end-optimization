import React from 'react';
import './Home.css';
import {Button} from 'antd';
import account from '../assets/svg/account.svg';

const Home = function() {
    return (
        <div className="home">
            <Button className="large-btn">Home</Button>
            <img className="account" src={account} alt="account"></img>
        </div>
    )
}

export default Home;