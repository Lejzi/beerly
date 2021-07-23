import React, { useState, useEffect } from 'react';
import ListCard from './ListCard';

const Accordion = ({ data }) => {
	const [list, setList] = useState(data);

	const handleOpen = (id) => {
		const newList = list;
		newList[id].open = !list[id].open;

		console.log('opening', id);
		setList([...newList]);
	};
	const handleCollapse = () => {
		const newList = list;

		newList.forEach((beer, index) => {
			newList[index].open = false;
		});

		setList([...newList]);
	};

	return (
		<div className='accordion'>
			<button onClick={() => handleCollapse()}>Collapse all</button>
			{list &&
				list.map((item, index) => {
					return (
						<ListCard
							key={item.id}
							data={item}
							action={() => handleOpen(index)}
						/>
					);
				})}
		</div>
	);
};

export default Accordion;
