import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log({ starship });
  const pilotApiURL = starship.pilots[0]
  useEffect(() => {
    if(starship.pilots.length > 0) {
      fetch(pilotApiURL)
      .then(res => res.json())
      .then(data => setFirstPilot(data.name))
    }
    }, [starship])

  return <li>{starship.name} - First Pilot: {firstPilot?firstPilot:'no pilot'}</li>;
}

export default StarshipsListItem;
