import axios from 'axios';

import { END_POINT, GET_INFO } from './types';

export const getInfo = (id) => (dispatch) => {
  const graphqlQuery = `
    query ($id: Int) { 
      Media (id: $id, type: ANIME) {
        id
        source
        meanScore
        format
        episodes
        duration
        genres
        status
        popularity
        hashtag
        startDate {
            day
            month
            year
        }
        endDate {
            day
            month
            year
        }
        season
        title {
          romaji
          english
          native
        }
        characters(page: 1) {
            edges {
                node {
                    id
                    name {
                        first
                        last
                    }
                }
                role
                voiceActors {
                    id
                    name {
                        first
                        last
                    }
                }
            }
          }
        staff(page: 1) {
          nodes {
            id
            name {
              first
              last
            }
          }
        }
        averageScore
        isAdult
        tags {
          name
          rank
          isMediaSpoiler
        }
      }
    }
  `;

  const variables = {
    "id": id
  };

  axios.post(END_POINT, { query: graphqlQuery, variables: variables })
    .then(res => {
      dispatch({
        type: GET_INFO,
        payload: res.data.data
      });
    })
    .catch(err => console.log(err))
}