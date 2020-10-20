import axios from 'axios';

import { GET_SEASON, GET_POPULAR, GET_NEXT, END_POINT } from './types';

export const getTrending = (type = 'season', number) => (dispatch) => {
  let args;

  if (type === 'season') args = ', seasonYear: 2020, season: FALL'
  else if (type === 'popular') args = ''
  else if (type === 'next') args = ', seasonYear: 2021, season: WINTER';

  const seasonPopularQuery = `query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (sort: POPULARITY_DESC, type: ANIME${args}) {
        id
        title {
          english
        }
        coverImage {
          large
        }
      }
    }
  }`;
  const variables = {
    "perPage": number,
    "page": 1
  };

  axios.post(END_POINT, { query: seasonPopularQuery, variables: variables })
    .then(res => {
      // Popular this season
      if (type === 'season') {
        dispatch({
          type: GET_SEASON,
          payload: res.data
        })
      }
      // All Time Popular
      else if (type === 'popular') {
        dispatch({
          type: GET_POPULAR,
          payload: res.data
        })
      }
      // Upcoming Next Season
      else if (type === 'next') {
        dispatch({
          type: GET_NEXT,
          payload: res.data
        })
      }
    })
    .catch(err => console.log(err))
}