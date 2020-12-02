import axios from 'axios';

import { END_POINT, SEARCH_QUERY, SEARCH_STATUS, CLEAR_SEARCH } from './types';

export const searchQuery = (searchQueries) => (dispatch) => {
  dispatch({
    type: SEARCH_STATUS,
    payload: 'searching'
  });
  const graphqlQuery = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String, $season: MediaSeason, $seasonYear: Int, $genre: String, $format: MediaFormat) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search, season: $season, seasonYear: $seasonYear, genre: $genre, format: $format, sort: POPULARITY_DESC) {
          id
          title {
            romaji
          }
          averageScore
          type
          genres
          season
          seasonYear
          format
          status
          duration
          popularity
          episodes
          coverImage{
            medium
          }
        }
      }
    }
  `;

  const variables = {
    "perPage": 50,
    "page": 1,
    ...searchQueries
  };

  axios.post(END_POINT, { query: graphqlQuery, variables: variables })
    .then(res => {
      dispatch({
        type: SEARCH_QUERY,
        payload: res.data
      });
      dispatch({
        type: SEARCH_STATUS,
        payload: 'searched'
      })
    })
    .catch(err => console.log(err));
};

export const clearSearch = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEARCH
  });
};