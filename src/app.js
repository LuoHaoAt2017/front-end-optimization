import React from 'react';
import './assets/css/index.css';
import Home from './components/Home';
import About from './components/About';

function App() {
	return (
		<div className="app">
			<Home/>
			<About/>
		</div>
	);
}

export default App;