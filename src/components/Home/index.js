import React from 'react';
import './index.css';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div id="google"></div>
            </div>
        )
    }

    componentDidMount() {
        let map = document.getElementById('google');
        if (map) {
            this.gmap = new google.maps.Map(map, {
                center: {lat: -34.3, lng: 150.6},
                zoom: 8
            });
        }
    }
}

export default Home;