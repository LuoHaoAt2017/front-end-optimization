import React from 'react';
import './index.scss';
import throttle from 'lodash/throttle';
import Loading from '@/assets/img/loading.jpg';
class LazyLoadImg extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                {
                    src: require('@/assets/img/01.jpg'),
                }, {
                    src: require('@/assets/img/02.jpg'),
                }, {
                    src: require('@/assets/img/03.jpg'),
                }, {
                    src: require('@/assets/img/04.jpg'),
                }, {
                    src: require('@/assets/img/05.jpg'),
                }, {
                    src: require('@/assets/img/06.jpg'),
                }, {
                    src: require('@/assets/img/07.jpg'),
                },  {
                    src: require('@/assets/img/08.jpg'),
                },  {
                    src: require('@/assets/img/09.jpg'),
                },  {
                    src: require('@/assets/img/10.jpg'),
                },  {
                    src: require('@/assets/img/11.jpg'),
                },  {
                    src: require('@/assets/img/12.jpg'),
                },  {
                    src: require('@/assets/img/13.jpg'),
                },  {
                    src: require('@/assets/img/14.jpg'),
                },  {
                    src: require('@/assets/img/15.jpg'),
                },  {
                    src: require('@/assets/img/16.jpg'),
                },  {
                    src: require('@/assets/img/17.jpg'),
                }
            ],
            loaded: 0,
            loading: {
                src: require('@/assets/img/loading.jpg'),
            }
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        const images = this.state.images;
        const loading = this.state.loading;
        return (
            <div className='img-lazy-load'>
                <p className='title'>图片懒加载</p>
                <ul id='img-list' className='list'>
                    {
                        images.map((elem, index) => {
                            return (
                                <li className='img-container' key={index}>
                                    <img
                                        alt='image'
                                        className='img'
                                        data-src={elem.src.default}
                                    />
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
        const selector = '.img-lazy-load .img-container .img';
        const images = document.querySelectorAll(selector);
        let counter = 0;
        for (let i = 0; i < images.length; i++) {
            const target = images[i];
            if (!target.src && target.dataset) {
                const top = target.getBoundingClientRect().top;
                console.log("rect: ", target.getBoundingClientRect());
                const delte = 100; // 50px的缓冲距
                if (top < viewH + delte) {
                    target.src = target.dataset.src;
                    counter++;   // 记录已经加载的照片数量
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
export default LazyLoadImg;