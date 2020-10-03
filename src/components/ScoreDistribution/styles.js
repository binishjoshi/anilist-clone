import { makeStyles } from '@material-ui/core/styles';
import { barColor, scoreData } from './data';

export const useStyles = makeStyles((theme) => ({
  scoreContainer: {
  },
  chartContainer: {
    backgroundColor: '#151f2e',
    marginTop: '8px',
    height: '88px',
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 10%)',
    ...generateBars(),
  },
  barContainer: {
    position: 'relative',
    "& p": {
      fontSize: '0.8rem',
    },
  },
  alignContainer: {
    position: 'absolute',
    bottom: '0',
  },
  bar: {
    borderRadius: '10px',
  },
}));

const generateBars = () => {
  const greatest = Math.max(...Object.values(scoreData));

  console.log(greatest);

  let percent = {};
  Object.keys(scoreData).map(score => {
    percent[score] = Math.round((scoreData[score] / greatest) * 50);
    return 0;
  });

  let count = 1;
  // Spread in chartContinaer
  let barStyles = {};
  Object.keys(barColor).map(score => {
    barStyles[`& div:nth-child(${count})`] = {
      "& div": {
        "& div": {
          backgroundColor: barColor[score],
          height: `${percent[score]}px`,
          width: '14px',
        }
      },
    };
    count++;
    return 0;
  });

  return barStyles;
};