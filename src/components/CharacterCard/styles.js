import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  characterCard: {
    backgroundColor: '#151f2e',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    borderRadius: '3px',
    overflow: 'hidden',
    color: '#9fadbd',
  },
  character: {
    display: 'flex',
    "& img": {
      height: '80px',
      width: '60px',
      marginRight: '10px',
    },
  },
  characterText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '7px 0 7px 0',
    "& p": {
      textDecoration: 'none',
      color: '#9fadbd',
    },
    "& p:first-child": {
      fontSize: '0.8rem',
    },
    "& p:last-child": {
      fontSize: '0.7rem',
    },
  },
  voice: {
    display: 'flex',
    justifyContent: 'space-between',
    "& img": {
      height: '80px',
      width: '60px',      
    }
  },
  voiceText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    padding: '7px 10px 7px 0',
    "& p": {
      color: '#9fadbd',
      textDecoration: 'none',
    },
    "& p:first-child": {
      fontSize: '0.8rem',
    },
    "& p:last-child": {
      fontSize: '0.7rem',
      marginLeft: 'auto',
    },
  }
}));