import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectedHero = (props) => {

  const [state, setState] = useState({
    superhero: [],
  });

  useEffect((hero) => {
    axios.get(`/seach/${hero}/selected`)
    .then(res => {
      setState({
        ...state,
        foods: res.data
      });
    }); // eslint-disable-next-line 
  },[])

  let foods = [];
  if (state.foods.length > 0) {
    foods = state.foods.map((food) => (
        <h2>{food}</h2>
    ));
  }

  return (
    <div className="App">
      {foods}
    </div>
  );
}

export default SelectedHero;
