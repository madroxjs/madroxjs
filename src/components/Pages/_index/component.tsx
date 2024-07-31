import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client'
import { PeopleQueryQuery, PeopleQueryQueryVariables } from '@/generated/graphql';


const GET_PEOPLE = gql`
query PeopleQuery {
  allPeople {
    people {
      name
    }
  }
}
`;



// Define the TypeScript interfaces
  export function IndexPage() {
    const { loading, error, data } = useQuery<PeopleQueryQuery, PeopleQueryQueryVariables>(GET_PEOPLE);
  
    useEffect(() => {
      if (loading) return;
      if (error) return;
    }, [loading, error, data]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
      <>
        {data?.allPeople?.people?.map((person) => (
          <p key={person?.name}>{person?.name}</p>
        ))}
      </>
    );
  }