import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();
	console.log(location);

	const { globalPokemons } = useContext(PokemonContext);

	let filteredPokemons = null

  if(location.state!=null){
   filteredPokemons = globalPokemons.filter(pokemon => 
	pokemon.name.includes(location.state.toLowerCase()))
  console.log("entra1")
  }

	return (

		location.state ? (
			<div className="container">
				<p className="p-search">
					Se encontraron <span>{filteredPokemons.length}</span>{' '}resultados:
				</p>
				<div className="card-list-pokemon container">
					{filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
				</div>
			</div>

		) : (


			<p className="p-search">
				Se encontraron <span>0</span>{' '}resultados:
			</p>


		)
	)
};