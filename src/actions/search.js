import axios from 'axios';

import { PUT_FORMAT, PUT_SEASON, PUT_YEAR, PUT_GENRE, END_POINT, SEARCH_QUERY, SEARCH_STATUS, CLEAR_SEARCH } from './types';

export const putQuery = (optionData, value) => (dispatch) => {
  switch (optionData) {
    case 'format':
      dispatch({
        type: PUT_FORMAT,
        payload: value,
      });
      break;
    case 'season':
      dispatch({
        type: PUT_SEASON,
        payload: value,
      });
      break;
    case 'year':
      dispatch({
        type: PUT_YEAR,
        payload: value,
      });
      break;
    case 'genre':
      dispatch({
        type: PUT_GENRE,
        payload: value,
      });
      break;
    default:
      console.log('Error in putting query');
      break;
  }
};

export const searchQuery = (keyword, otherQueries) => (dispatch) => {
  dispatch({
    type: SEARCH_STATUS,
    payload: 'searching'
  });
  const graphqlQuery = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search) {
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
    "search": keyword,
    "perPage": 50,
    "page": 1
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