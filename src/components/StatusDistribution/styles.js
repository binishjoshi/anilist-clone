import { makeStyles } from '@material-ui/core/styles';
import { statusData, colorData } from './data';

export const useStyles = makeStyles((theme) => ({
  statusContainer: {
  },
  chartContainer: {
    backgroundColor: '#151f2e',
    marginTop: '8px',
    borderRadius: '5px',
    paddingTop: '4%',
    overflow: 'hidden',
  },
  infoContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 20.5%)',
    columnGap: '5%',
    marginLeft: '3.5%',
    ...generateColors()
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  users: {
    display: 'grid',
    justifyContent: 'center',
    marginTop: '5px',
  },
  lineChart: {
    display: 'grid',
    marginTop: '18px',
    ...generateLineColumns(),
  }
}));

const generateColors = () => {
  let infoChild = {};
  let count = 1;
  Object.keys(colorData).map(status => {
    infoChild[`& div:nth-child(${count})`] = {
      "& div:first-child": {
        backgroundColor: colorData[status],
        color: 'white',
        padding: '4% 10% 2% 10%',
        borderRadius: '4px',
      },
      "& div:last-child": {
        "& p:first-child": {
          color: colorData[status]
        },
      }
    };
    count++;
    // To avoid 'arrow function must return' sth warning
    return 0;
  });
  return infoChild;
};

const generateLineColumns = () => {
  const sum = Object.keys(statusData).reduce((sum, key) => sum + parseInt(statusData[key]), 0);
  let percent = {};

  Object.keys(statusData).map(status => {
    percent[status] = Math.round((statusData[status] / sum) * 100);
    return 0;
  });

  let lineColumns = '';
  Object.keys(percent).map(status => {
    lineColumns += `${percent[status]}% `;
    return 0;
  });

  let count = 1;
  let lineChartStyles = { gridTemplateColumns: lineColumns.slice(0, -1) };
  Object.keys(colorData).map(status => {
    lineChartStyles[`& div:nth-child(${count})`] = {
      backgroundColor: colorData[status],
      height: '10px',
    };
    count++;
    return 0;
  });

  return lineChartStyles;
};