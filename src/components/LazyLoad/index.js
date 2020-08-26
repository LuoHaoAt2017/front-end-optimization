import React from 'react';
import './index.scss';
import throttle from 'lodash/throttle';

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
        console.log('scroll');
        const viewH = document.documentElement.clientHeight;
        const images = document.getElementsByClassName('img');
        let counter = 0;
        for (let i = 0; i < images.length; i++) {
            const target = images[i];
            if (!target.src && target.dataset) {
                const top = target.getBoundingClientRect().top;
                const delte = 50; // 50px的缓冲距离
                const loaded = this.state.loaded;
                if (top < viewH + delte) {
                    target.src = target.dataset.src;
                    console.log('为什么更改loaded无效');
                    // 为什么更改loaded无效
                    counter++;
                }
            }
        }
        // setState异步操作
        this.setState({
            loaded: this.state.loaded + counter
        });
    }

    componentDidUpdate(props, state) {
        // 已经加载完毕全部图片后，注销scroll的回调函数。
        if (state.loaded === state.images.length) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    componentDidMount() {
        this.handleScroll = throttle(this.handleScroll, 500);
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    }
}

export default ImageLazyLoad;