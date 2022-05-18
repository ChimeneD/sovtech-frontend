import React, { useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_NEXT_PREV } from '../../queries/queries';
import { useNavigate } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { ContextAPI } from '../../utils/context';

const Body = () => {
  let navigate = useNavigate();
  const {
    changePage,
    pageCount,
    peopleData,
    pageUrl,
    changePeopleData,
    loading,
    error,
  } = useContext(ContextAPI);

  const [
    getNextPrev,
    { loading: next_loading, error: next_error, data: next_data },
  ] = useLazyQuery(GET_NEXT_PREV);

  const navigateFunction = (url: string) => {
    navigate(`/character?url=${url}`);
  };

  const handleChangePage = async (page: string, url: string) => {
    console.log(url);
    if (page === 'prev') {
      await getNextPrev({ variables: { url: url } });
      if (next_data) {
        changePeopleData(next_data.getNextPrevPage);
        changePage('decrease');
      }
    }
    if (page === 'next') {
      await getNextPrev({ variables: { url: url } });
      console.log(next_data);
      if (next_data) {
        changePeopleData(next_data.getNextPrevPage);
        changePage('increase');
      }
    }
  };

  if (loading || next_loading)
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

  if (next_error)
    return (
      <>
        <p>Error {`=> ` + next_error.message}</p>
      </>
    );
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '1rem',
        width: '75%',
        margin: '40px auto',
      }}
    >
      {peopleData.results.length > 0
        ? peopleData.results.map((people: any) => {
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
      <div
        style={{
          display: 'flex',
          width: '200px',
          margin: 'auto',
        }}
      >
        <IconButton
          color='primary'
          disabled={pageUrl.previous === null}
          onClick={() => handleChangePage('prev', pageUrl.previous)}
        >
          <RiArrowLeftSLine />
        </IconButton>
        <Typography style={{ margin: 'auto' }}>page {pageCount}</Typography>
        <IconButton
          color='primary'
          disabled={pageUrl.next === null}
          onClick={() => handleChangePage('next', pageUrl.next)}
        >
          <RiArrowRightSLine />
        </IconButton>
      </div>
    </div>
  );
};

export default Body;
