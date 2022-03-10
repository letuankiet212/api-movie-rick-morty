import client from './client';

const getCharacters = async () => await client.get('character');

const ramApi = {
	getCharacters,
};

export default ramApi;
