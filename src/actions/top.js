import axios from 'axios';

import { END_POINT, GET_TOP } from './types';

export const getTop = (type, number) => (dispatch) => {
  const graphqlQuery = `query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (sort: SCORE_DESC, type: ${type}) {
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
      }
    }
  }`
  const variables = {
    "perPage": number,
    "page": 1
  }
  axios.post(END_POINT, { query: graphqlQuery, variables: variables })
    .then(res => {
      dispatch({
        type: GET_TOP,
        payload: res.data.data
      })
    })
    .catch(err => console.log(err))
};