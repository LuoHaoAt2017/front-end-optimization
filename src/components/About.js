import React from 'react';
import './About.css';
import {Button} from 'antd';
import gmail from '../assets/svg/gmail.svg';

const About = function() {
    return (
        <div className="about">
            <Button className="large-btn">About</Button>
            <img className="gmail" src={gmail} alt="gmail"></img>
        </div>
    )
}

export default About;