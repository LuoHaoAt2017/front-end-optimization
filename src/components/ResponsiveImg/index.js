
import React from 'react';
import './index.scss';
import Img18 from '@/assets/img/18.jpg';
import Img19 from '@/assets/img/19.jpg';
import Img20 from '@/assets/img/20.jpg';
import Img21 from '@/assets/img/21.jpg';
class ResponsiveImg extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='responsive-img'>
                <picture>
                    <source srcSet={Img20} media="(min-width: 900px)"></source>
                    <source srcSet={Img19} media="(min-width: 600px)"></source>
                    <source srcSet={Img18} media="(min-width: 300px)"></source>
                    <img src={Img21} alt="没有匹配到时的默认图片" className='image-wrapper'></img>
                </picture>
            </div>
        )
    }
}

export default ResponsiveImg;