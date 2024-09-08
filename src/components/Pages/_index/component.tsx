// import { useEffect } from 'react';
// import { gql, useQuery } from '@apollo/client'
import { PageComponentType } from '@/lib/types'
import Content from './content/_index.mdx'

// const GET_PEOPLE = gql`
//       query Example{
//           getCharacters {
//             mangaName
//             race
//             team
//             mentors
//             students
//             dateOfBirth
//             dateOfDeath
//         }
//       }  
// `;



// Define the TypeScript interfaces
  export const IndexPage: PageComponentType = () => {
    // const { loading, error, data } = useQuery(GET_PEOPLE);
  
    // useEffect(() => {
    //   if (loading) return;
    //   if (error) return;
    //   console.log(data)
    // }, [loading, error, data]);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    return (
      <div>
        got one
        <p className='font-action-man'>MadroxJS</p>
        <Content />
      </div>
    );
  }

  IndexPage.path = "/"