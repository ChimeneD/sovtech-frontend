import React from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { GET_PERSON } from '../queries/queries';
import Layout from '../components/layout';
import Header from '../components/Header';
import { Grid, Typography } from '@mui/material';

const Character = () => {
  const [searchParams] = useSearchParams();

  const { data, loading, error } = useQuery(GET_PERSON, {
    variables: { getPersonId: searchParams.get('url') },
  });

  console.log(searchParams.get('url'));
  console.log(data);
  //if (loading) return null;
  //if (error) return `Error! ${error}`;
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
  return (
    <Layout>
      <Header />
      {data ? (
        <main
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Name:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.name}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Height:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.height}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Mass:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.mass}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Hair Color:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.hair_color}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Skin Color:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.skin_color}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Eye Color:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.eye_color}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Birth Year:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.birth_year}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <Typography>Character Gender:</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.getPerson.gender}</Typography>
            </Grid>
          </Grid>
        </main>
      ) : (
        ''
      )}
    </Layout>
  );
};

export default Character;
