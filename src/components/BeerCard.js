import React from 'react';

const BeerCard = ({ data }) => {
	return (
		<div className='beer-card'>
			<img src={data.image_url} alt='beer-image' />
			<h3>{data.name}</h3>
			<p>{data.tagline}</p>
			<p>vol. {data.abv}</p>
			<p>{data.description}</p>
			<a href='#'>More Info {'>'}</a>
		</div>
	);
};

export default BeerCard;
