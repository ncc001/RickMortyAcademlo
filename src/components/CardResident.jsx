import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const CardResident = ({ url }) => {
	const resident = useFetch(url);
	const statusToClassName = {
		Alive: 'alive',
		Dead: 'dead',
		unknown: 'unknowm',
	};

	return (
		<article className='wrapper cardresident-info'>
			<header>
				<img
					className='img-header'
					src={resident?.image}
					alt={`image of ${resident?.name}`}
				/>
				<div className='status-container'>
					<div
						className={statusToClassName[resident?.status]}
						id='circle'
					></div>
					<span>{resident?.status}</span>
				</div>
			</header>
			<div className='residents-info'>
				<h3>{resident?.name}</h3>
				<ul>
					<li className='residents-list'>
						<span>Specie:</span> <br />
						{resident?.species}
					</li>
					<li className='residents-list'>
						<span>Origin:</span>
						<br />
						{resident?.origin.name}
					</li>
					<li className='residents-list'>
						<span>Eppisodes Where Appear:</span>
						<br />
						{resident?.episode.length}
					</li>
				</ul>
			</div>
		</article>
	);
};

export default CardResident;
