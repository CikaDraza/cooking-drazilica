import React from 'react';
import Caunter from './counter';
import App from '../App';

const Recipe = ({ title, calories, totalWeight, image, source, sourceUrl, share }) => {
	let cal = Math.floor(calories / 4);
	let totalW = Math.floor(totalWeight / 4);

	const cart = [];

	const saveCart = (clickObj) => {};

	return (
		<div className="card-recipe">
			<div class="container-card">
				<a href={share} className="card">
					<a href="#" className="save-recipes" onClick={saveCart}>
						<img src="set-icons-bookmark-add.png" />
						<span>save</span>
					</a>
					<img className="pic" src={image} alt="" />
					<h4 className="title">{title}</h4>
				</a>
				<hr />
				<h5>
					<span className="App-link cal">{cal}</span> kcal<span className="App-link weight"> {totalW}</span> g
				</h5>
				<hr />
				<h5 className="source">
					<a href={sourceUrl}>{source}</a>
				</h5>
			</div>
		</div>
	);
};

export default Recipe;
