import React, { useState } from 'react';
import Nav from '../components/Nav';
import Accordion from '../components/Accordion';
import Cta from '../components/Cta';

const MainScreen = ({ data }) => {
	const [nav, setNav] = useState('accordion');

	const handleNav = (nav) => {
		console.log(nav);
		setNav(nav);
	};

	return (
		<div className='main-screen'>
			<img
				className='logo'
				src='https://image.flaticon.com/icons/png/512/761/761777.png'
			/>
			<Nav action={(nav) => handleNav(nav)} active={nav} />
			{nav === 'accordion' ? <Accordion data={data} /> : <Cta data={data} />}
		</div>
	);
};

export default MainScreen;
