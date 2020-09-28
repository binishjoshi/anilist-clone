import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  displayEntry: {
    color: '#9fadbd',
  },
  bannerContainer: {
    backgroundColor: '#151f2e',
    "& img": {
      height: '290px',
      minWidth: '100vw',
      objectFit: 'cover',
    }
  },
  info: {
    paddingLeft: '12.5%',
    paddingRight: '10%',
    backgroundColor: '#151f2e',
    display: 'grid',
    gridTemplateColumns: '25% auto',
    maxHeight: '265px',
  },
  leftInfo: {
    "& img": {
      maxHeight: '298px',
      minWidth: '215px',
      objectFit: 'cover',
      borderRadius: '2px',
      position: 'relative',
      bottom: '120px',
    }
  },
  buttonContainer: {
    position: 'relative',
    bottom: '100px',
    display: 'grid',
    gridTemplateColumns: '60% 6%',
    gridGap: '10px',
    "& button:first-child": {
      backgroundColor: '#3db4f2',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '0.9em',
    },
    "& button:last-child": {
      backgroundColor: '#e85d75',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      paddingRight: '30px',
      paddingTop: '8px',
    },
  },
  rightInfo: {
    "& h5": {
      paddingTop: '15px',
    },
    "& p": {
      paddingTop: '10px',
    },
  },
  tabContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 13.75%)',
    justifyItems: 'center',
    paddingTop: '7.5%',
    "& a": {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
}));