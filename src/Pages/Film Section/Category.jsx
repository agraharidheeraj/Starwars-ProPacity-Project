import axios from 'axios';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => setPeople(response.data.results))
      .catch(error => console.error(error));
  }, []);

  const fetchPersonImage = (person) => {
    const seed = person.name.toLowerCase().replace(/ /g, '');
    return `https://picsum.photos/seed/${seed}/200/300`;
  };

  // Render the people data with their images
  return (
    <div>
      {people.map((person) => (
        <div key={person.name}>
          <img src={fetchPersonImage(person)} alt={person.name} />
          <p>{person.name}</p>
          {/* Render other details for each person */}
        </div>
      ))}
    </div>
  );
};
