import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const Loading = <Skeleton animation="wave" />;

export const fakeData = {
  'Format': Loading,
  'Episodes': Loading,
  'Episode Duration': Loading,
  'Status': Loading,
  'Start Date': Loading,
  'End Date': Loading,
  'Season': Loading,
  'Average Score': Loading,
  'Mean Score': Loading,
  'Popularity': Loading,
  'Favorites': Loading,
  'Studios': Loading,
  'Source': Loading,
  'Hashtag': Loading,
  'Genres': Loading,
  'Romaji': Loading,
  'English': Loading,
  'Native': Loading,
};

export const createData = (info) => {
  return ({
    'Format': info.format,
    'Episodes': info.episodes,
    'Episode Duration': `${info.duration} mins`,
    'Status': info.status,
    'Start Date': `${info.startDate.year}/${info.startDate.month}/${info.startDate.day}`,
    'End Date': `${info.endDate.year}/${info.endDate.month}/${info.endDate.day}`,
    'Season': `${info.season} ${info.startDate.year}`,
    'Average Score': `${info.averageScore}%`,
    'Mean Score': `${info.meanScore}%`,
    'Popularity': info.popularity,
    'Favorites': '1861',
    'Studios': 'Bandai Namco Pictures',
    'Source': info.source,
    'Hashtag': info.hashtag,
    'Genres': info.genres[0],
    'Romaji': info.title.romaji,
    'English': info.title.english,
    'Native': info.title.native,
  })
}

export const fetchTags = (info) => {
  let tagArray = info.tags;
  let tags = {};
  for (let i = 0; i < tagArray.length; i++) {
    tags[tagArray[i].name] = `${tagArray[i].rank}%`;
  }
  return tags;
};