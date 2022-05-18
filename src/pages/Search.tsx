import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GET_SEARCH } from '../queries/queries';
import Header from '../components/Header';
import { Typography } from '@mui/material';

const Search = () => {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_SEARCH, {
    variables: { name: searchParams.get('name') },
  });

  console.log(data);
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Error {`=> ` + error.message}</p>
      </>
    );
  const navigateFunction = (url: string) => {
    navigate(`/character?url=${url}`);
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          gap: '1rem',
          width: '75%',
          margin: '40px auto',
        }}
      >
        {data.searchPerson.length > 0
          ? data.searchPerson.map((people: any) => {
              return (
                <article
                  key={people.url}
                  onClick={() => navigateFunction(people.url)}
                  style={{
                    border: '1px solid gray',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <Typography>{people.name}</Typography>
                  <Typography variant='caption'>{people.gender}</Typography>
                </article>
              );
            })
          : ''}
      </div>
    </>
  );
};

export default Search;
