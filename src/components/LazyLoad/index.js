import React from 'react';
import './index.scss';

class ImageLazyLoad extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                {
                    src: require('@/assets/img/1.jpg'),
                }, {
                    src: require('@/assets/img/2.jpg'),
                }, {
                    src: require('@/assets/img/3.jpg'),
                }, {
                    src: require('@/assets/img/4.jpg'),
                }, {
                    src: require('@/assets/img/5.jpg'),
                }, {
                    src: require('@/assets/img/6.jpg'),
                }, {
                    src: require('@/assets/img/7.jpg'),
                }
            ],
            loaded: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        const images = this.state.images;
        return (
            <div className='img-lazy-load'>
                <p className='title'>图片懒加载</p>
                <ul id='img-list' className='list'>
                    {
                        images.map((elem, index) => {
                            return (
                                <li className='img-container' key={index}>
                                    <img className='img' data-src={elem.src.default} alt='blank'/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    handleScroll() {
        const viewH = document.documentElement.clientHeight;
        const images = document.getElementsByClassName('img');
        for (let i = 0; i < images.length; i++) {
            const target = images[i];
            const top = target.getBoundingClientRect().top;
            if (top < viewH) {
                target.src = target.dataset.src;
            }
        }
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
}

export default ImageLazyLoad;