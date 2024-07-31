import { useQuery, gql } from '@apollo/client';
import { Input, List, ListItem, Modal } from '@/components/Atoms/Input';
import { useState } from 'react';

const GET_PLANETS = gql`
  query GetPlanets {
    allPlanets {
      planets {
        id
        name
        climate
        terrain
        population
      }
    }
  }
`;

export const PlanetList = () => {
  const { loading, error, data } = useQuery(GET_PLANETS);
  const [search, setSearch] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { planets } = data.allPlanets;

  const filteredPlanets = planets.filter(planet =>
    planet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Input
        placeholder="Search planets"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List>
        {filteredPlanets.map(planet => (
          <ListItem key={planet.id} onClick={() => setSelectedPlanet(planet)}>
            {planet.name}
          </ListItem>
        ))}
      </List>
      {selectedPlanet && (
        <Modal onClose={() => setSelectedPlanet(null)}>
          <h2>{selectedPlanet.name}</h2>
          <p>Climate: {selectedPlanet.climate}</p>
          <p>Terrain: {selectedPlanet.terrain}</p>
          <p>Population: {selectedPlanet.population}</p>
        </Modal>
      )}
    </>
  );
};
