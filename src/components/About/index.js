import React from 'react';
import './index.css';
import {Button} from 'antd';
import Gmail from '@/assets/svg/gmail.svg';

const About = function() {
    return (
        <div className="about">
            <Button className="large-btn">About</Button>
            <Gmail className="gmail"></Gmail>
        </div>
    )
}

export default About;