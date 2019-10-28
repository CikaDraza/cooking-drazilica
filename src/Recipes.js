import React from 'react';

const Recipe = ({title, calories, totalWeight, image, source})=> {

  let cal = Math.floor(calories/4);
  let totalW = Math.floor(totalWeight/4);

  return(

      <div className="card-recipe">
        <div class="container-card">
          <a href="https://www.youtube.com/" className="card" >
          <a href="https://www.youtube.com/watch?v=4bejSQdhVeo" className="save-recipes"><img src="set-icons-bookmark-add.png" /><span>save</span></a>
            <img className="pic" src={image} alt=""/>
            <h4 className="title">{title}</h4>
            <hr />
            <h5><span className='App-link cal'>{cal}</span> kcal<span className='App-link weight'> {totalW}</span> g</h5>
            <hr />
          </a>
          <h5 className="source"><a href="#">{source}</a></h5>
        </div>
      </div>

  );
}

export default Recipe;