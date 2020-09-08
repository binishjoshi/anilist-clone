import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  homeCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    marginTop: '40px',
    marginBottom: '40px',
    width: '80vw',
    backgroundColor: '#08121e',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '60px',
  },
  gridHeading: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topTitle: {
    color: 'rgb(213, 222, 230)',
    marginTop: '40px',
  },
  topSubTitle: {
    marginTop: '20px',
    color: 'rgb(153, 203, 239)',
  },
  gridSubHeading: {
    paddingLeft: '10%'
  },
  svg: {
    height: '65px',
    paddingRight: '25px',
  }
});

export const gridStyleLeft = {
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '10%',
  color: 'rgb(193, 227, 252)',
  paddingTop: '5%',
};

export const gridStyleRight = {
  display: 'flex',
  flexDirection: 'row',
  paddingRight: '10%',
  color: 'rgb(193, 227, 252)',
  paddingTop: '5%',
};