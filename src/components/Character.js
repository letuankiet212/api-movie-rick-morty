import { useEffect } from 'react';
import ramApi from '../api/rickandmortyapi';
import client from './../api/client';

function Character() {
	const fecthCharactes = async () => {
		const res = await ramApi.getCharacters();
		console.log(res);
	};

	useEffect(() => {
		fecthCharactes();
	});

	return <div>Hello</div>;
}

export default Character;
