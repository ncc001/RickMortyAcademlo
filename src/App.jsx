import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CardResident from './components/CardResident';
import LocationInfo from './components/LocationInfo';

function App() {
	const [location, setLocation] = useState();
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		let numberLocation;

		if (searchInput === '') {
			numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
		} else {
			numberLocation = searchInput;
		}

		const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
		axios
			.get(URL)
			.then((res) => setLocation(res.data))
			.catch((err) => console.log(err));
	}, [searchInput]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setSearchInput(e.target.search.value);
	};

	return (
		<div className='App'>
			<div className='hero'>
				<form className='wrapper form-search' onSubmit={handleSubmit}>
					<input
						id='search'
						type='text'
						placeholder='write the location number'
					/>
					<button>Search</button>
				</form>
			</div>

			<LocationInfo location={location} />
			<div className=' cardresident-container wrapper '>
				{location?.residents.map((url) => (
					<CardResident key={url} url={url} />
				))}
			</div>
		</div>
	);
}

export default App;

