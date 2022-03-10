import ramApi from '../api/rickandmortyapi';
import { useQuery } from 'react-query';

function Character() {
	const Characters = useQuery('characters', () => {
		return ramApi.getCharacters();
	});

	if (Characters.isLoading) {
		return <div> Loading ...</div>;
	}

	return (
		<div class="w-3/5 mx-auto pt-3">
			<h5 class="mb-5 uppercase font-bold">List Charactes</h5>
			<div className="grid grid-cols-5 gap-2">
				{Characters.data?.data.results.map((character, index) => {
					return (
						<div key={index} class="cursor-pointer overflow-hidden rounded-sm shadow-sm border-2 border-gray-600 flex flex-col ">
							<img src={character.image} class="flex-1" alt="" />
							<div className="character-name bg-gray-200 p-2">Billy</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Character;
