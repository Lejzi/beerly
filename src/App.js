import React, { useState, useEffect } from 'react';
import './styles/styles.sass';

import Splash from './screens/Splash';
import MainScreen from './screens/MainScreen';

const App = () => {
	const [data, setData] = useState('');

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('https://api.punkapi.com/v2/beers', {
				method: 'GET',
			});

			const res = await response.json();

			setData(res);
		};
		getData();
	}, []);

	const Screen = data === '' ? <Splash /> : <MainScreen data={data} />;

	return <div className='App'>{Screen}</div>;
};

export default App;
