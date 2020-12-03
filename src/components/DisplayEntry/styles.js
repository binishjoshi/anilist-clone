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
  description: {
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
    display: 'grid',
    gridTemplateRows: '60% 10%',
  },
  textContainer: {
    overflow: 'hidden',
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
    paddingTop: '3.5%',
    "& p:hover": {
      cursor: 'pointer',
    },
  },
  entryOverview: {
    paddingLeft: '12.5%',
    paddingRight: '10%',
    display: 'grid',
    gridTemplateColumns: '25% auto',
  },
  leftOverview: {
    marginTop: '30px',
  },
  rank: {
    backgroundColor: '#151f2e',
    maxWidth: '82%',
    minHeight: '33px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    borderRadius: '3px',
    "& p": {
      fontSize: '0.8em',
    },
  },
  info: {
    backgroundColor: '#151f2e',
    borderRadius: '3px',
    padding: '13.5px',
    maxWidth: '72%',
    "& h6": {
      fontSize: '0.9rem',
      fontWeight: '401',
    },
    "& p": {
      fontSize: '0.8rem',
      marginBottom: '12px',
    },
  },
  tags: {
    marginTop: '25px',
    marginBottom: '20px',
    "& p": {
      marginBottom: '8px',
    }
  },
  tag: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#151f2e',
    padding: '12px',
    borderRadius: '3px',
    maxWidth: '74%',
    marginBottom: '12px',
    height: '6px',
    "& p": {
      fontSize: '0.85rem',      
    }
  },
  relations: {
    marginTop: '18px',
    marginBottom: '20px',
  },
  relationContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 110px)',
  },
  relation: {
    textDecoration: 'none',
    color: '#9fadbd',
    "& img": {
      height: '115px',
      width: '85px',
      borderRadius: '3px',
    }
  },
  characterContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    rowGap: '20px',
    columnGap: '35px',
  },
  staff: {
    marginTop: '45px',
  },
  staffContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    rowGap: '20px',
    columnGap: '35px',
  },
  chartsContainer: {
    margin: '35px 0 20px 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 48%)',
    columnGap: '35px',
  },
}));