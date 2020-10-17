import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  staffCard: {
    backgroundColor: '#151f2e',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    borderRadius: '3px',
    overflow: 'hidden',
    color: '#9fadbd',
    "& a": {
      textDecoration: 'none',
    },
  },
  staff: {
    display: 'flex',
    "& img": {
      height: '70px',
      width: '52px',
      marginRight: '10px',
    },
  },
  staffText: {
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
  loading: {
    height: '60px',
  },
}));