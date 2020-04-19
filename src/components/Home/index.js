import React from 'react';
import './index.css';
import {Button} from 'antd';
import Account from '@/assets/svg/account.svg';

const Home = function() {
    return (
        <div className="home">
            <Button className="large-btn">Home</Button>
            <span className="text">account</span>
            <Account className="account"></Account>
        </div>
    )
}

export default Home;