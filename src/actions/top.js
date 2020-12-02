import axios from 'axios';

import { END_POINT, GET_TOP } from './types';

export const getTop = (type, number) => (dispatch) => {
  let args;

  if (type === 'season') args = ', seasonYear: 2020, season: FALL, sort: POPULARITY_DESC'
  else if (type === 'popular') args = ', sort: POPULARITY_DESC'
  else if (type === 'next') args = ', seasonYear: 2021, season: WINTER, sort: POPULARITY_DESC';
  else if (type === 'trending') args = ', sort: TRENDING_DESC';
  else if (type === 'ratings') args =', sort: SCORE_DESC';

  const graphqlQuery = `query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (type: ANIME${args}) {
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
        coverImage {
          medium
        }
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