import React from 'react';

const LocationInfo = ({ location }) => {
	return (
		<article className='locations-container wrapper'>
			<div>
				<span>Name:</span> {location?.name}
			</div>

			<div>
				<span>Type:</span>
				{location?.type}
			</div>

			<div>
				<span>Dimension:</span>
				{location?.dimension}
			</div>

			<div>
				<span>Population:</span>
				{location?.residents.length}
			</div>
		</article>
	);
};

export default LocationInfo;
