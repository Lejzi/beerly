import React from 'react';

const Nav = (props) => {
	return (
		<div className='nav'>
			<button
				className={props.active === 'accordion' ? 'active' : null}
				onClick={() => props.action('accordion')}
			>
				Accordion
			</button>
			<button
				className={props.active === 'cta' ? 'active' : null}
				onClick={() => props.action('cta')}
			>
				Cta
			</button>
		</div>
	);
};

export default Nav;
