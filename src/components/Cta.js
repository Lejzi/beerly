import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';

const Cta = ({ data }) => {
	const [list, setList] = useState(data);
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('');

	const handleSearch = (e) => {
		const value = e.target.value;

		const newList = data.filter((item) =>
			item.name.toUpperCase().includes(value.toUpperCase())
		);

		setList([...newList]);
	};

	const handleFilter = (e) => {
		const filter = e.target.value;
		const newList = list;

		switch (filter) {
			case 'none':
				break;
			case 'asc':
				newList.sort((firstItem, secondItem) => firstItem.abv - secondItem.abv);
				break;
			case 'desc':
				newList.sort((firstItem, secondItem) => secondItem.abv - firstItem.abv);
		}

		setList([...newList]);
	};

	return (
		<div className='ctas'>
			<input
				type='text'
				name='search'
				className='search-field'
				placeholder='Search'
				onChange={(e) => handleSearch(e)}
			/>
			<select
				className='search-field'
				name='filter'
				onChange={(e) => {
					handleFilter(e);
				}}
			>
				<option value='none'>Sort</option>
				<option value='asc'>vol. asc</option>
				<option value='desc'>vol. desc</option>
			</select>
			<div className='cta'>
				{list &&
					list.map((item) => {
						return <BeerCard key={item.id} data={item} />;
					})}
			</div>
		</div>
	);
};

export default Cta;
