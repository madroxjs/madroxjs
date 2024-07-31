import { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { PeopleQueryQuery, PeopleQueryQueryVariables } from '@/generated/graphql';
import { Card, CardHeader, CardContent, Badge, Tooltip } from '@/components/Atoms';
import { GET } from '@/queries'

type CharacterCardProps = {
  person?: any
}

const CharacterCard: React.FC<CharacterCardProps> = ({ person }) => {
  return (
    <Card>
      <CardHeader>
        <img src={"https://placehold.co/600x400"} alt={person.name} />
        <h2>{person.name}</h2>
      </CardHeader>
      <CardContent>
        <p>Species: {person.species?.name ?? 'Human'}</p>
        <p>Homeworld: {person.homeworld.name}</p>
        <p>Eye Color: {person.eyeColor}</p>
      </CardContent>
    </Card>
  );
};

// Define the TypeScript interfaces
  export function IndexPage() {
    const { loading, error, data } = useQuery<PeopleQueryQuery, PeopleQueryQueryVariables>(GET.CHARACTERS);
  
    useEffect(() => {
      if (loading) return;
      if (error) return;
    }, [loading, error, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
      <div className="p-4 justify-self-center" style={{width: '1000px'}}>
        <h2>Characters</h2>
        <div className='grid md:grid-cols-5 gap-4 grid-cols-1'>
          {data?.allPeople?.people?.map((person, key) => <CharacterCard person={person} key={key} />)}
        </div>
      </div>
    );
  }