import React from "react";
import { useParams } from 'react-router-dom';
import MovieActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateMovieActorsPage";
// import useMovie from "../hooks/useMovie";
import { getActorsDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: actors, error, isLoading, isError } = useQuery(
    ["actors", { id: id }],
    getActorsDetails
  );

  //console.log(actors)
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actors ? (
        <>
          <PageTemplate actors={actors}>
            <MovieActorDetails actors={actors} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;