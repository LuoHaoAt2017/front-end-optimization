import React from 'react';
import './index.css';
import {Button} from 'antd';
import account from '@/assets/svg/account.svg';

const Home = function() {
    return (
        <div className="home">
            <Button className="large-btn">Home</Button>
            <span className="text">account</span>
            <img className="account" src={account} alt="account"></img>
        </div>
    )
}

export default Home;