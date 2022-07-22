import { useState, useEffect } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')
  // console.log("Planet", planet);
  const filmsApiURL = planet.films[0]
  useEffect(() => {
        fetch(filmsApiURL)
        .then(res => res.json())
        .then(data => setFirstFilm(data.title))
    }, [planet])

  return <li>{planet.name} - First Film: {firstFilm}</li>;
}

export default PlanetsListItem;
