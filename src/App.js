import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Recipe from './components/Recipes';
import './App.css';
import Counter from './components/counter';
import {APP_ID} from './keys/App_keys';
import {APP_KEY} from './keys/App_keys';

function App() {

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('pork');

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div style={{overflow: 'hidden'}}>
			<div className="header App-header App">
				<div className="top-header">
					<div className="search">
						<form className="search-form" onSubmit={getSearch}>
							<input className="search-bar" type="text" value={search} onChange={updateSearch} />
							<button className="search-button" type="submit">
								Search
							</button>
						</form>
					</div>
					<Counter />
				</div>
				<div className="bottom-header">refine search by Calories ^</div>
			</div>
			<div class="container">
				<div className="main">
					{recipes.map((recipe) => (
						<Recipe
							title={recipe.recipe.label}
							calories={recipe.recipe.calories}
							totalWeight={recipe.recipe.totalWeight}
							image={recipe.recipe.image}
							source={recipe.recipe.source}
							share={recipe.recipe.shareAs}
							sourceUrl={recipe.recipe.url}
						/>
					))}
				</div>
			</div>
			<footer className="footer App App-header">Footer</footer>
		</div>
	);
}

export default App;
