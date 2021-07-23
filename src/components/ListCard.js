import React from 'react';

const ListCard = ({ data, action }) => {
	return (
		<div className={`list-card ${data.open ? 'open' : null}`}>
			<div className='top'>
				<h3>{data.name}</h3>
				<button className='carret' onClick={() => action()}>
					^
				</button>
			</div>
			<div className='list-details'>
				<p>{data.tagline}</p>
				<p>First brewed: {data.first_brewed}</p>
			</div>
		</div>
	);
};

export default ListCard;
