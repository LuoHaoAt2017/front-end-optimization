import React from 'react';
import './index.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.createPlaces = this.createPlaces.bind(this);
    }

    render() {
        return (
            <div className="home">
                <div id="google"></div>
                <div id="places"></div>
            </div>
        )
    }

    createPlaces() {
        // DOM慢的原因：DOM回流导致页面元素几何尺寸和位置信息重新计算，
        // DOM重绘导致页面元素非几何尺寸和位置信息的改变(背景色，字体颜色)。
        // 减少DOM访问：将3次DOM操作，将少到一次。
        const container = document.createDocumentFragment();
        const places = ['Los Angeles', 'Houston', 'Detroit'];
        const len = places.length;
        for(let i = 0; i < len; i++) {
            const span = document.createElement('span');
            span.innerText = places[i];
            span.setAttribute('class', 'place');
            container.appendChild(span);
        }
        const placesDom = document.getElementById('places');
        placesDom && placesDom.appendChild(container);
    }
    
    componentDidMount() {
        let map = document.getElementById('google');
        if (map) {
            this.gmap = new google.maps.Map(map, {
                center: {lat: -34.3, lng: 150.6},
                zoom: 8
            });
        }
        this.createPlaces();
    }
}

export default Home;