import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;
  
  const [homeworld, setHomeworld] = useState('');
  // console.log("person", person)
  // console.log("homeworld", person.homeworld)
  const homeworldApiURL = person.homeworld
  useEffect(() => {
        fetch(homeworldApiURL)
        .then(res => res.json())
        .then(data => setHomeworld(data.name))
    }, [person])

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
