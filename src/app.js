import React from 'react';
import '@/assets/css/index.css';
import Home from '@/components/Home/index.js';
import About from '@/components/About/index.js';

function App() {
	return (
		<div className="app">
			<Home/>
			<About/>
		</div>
	);
}

export default App;