import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: '#0e1217',
    color: '#afbed5',
    fontFamily: 'sans-serif',
    fontSize: '0.8em',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  themeSelector: {
    marginLeft: '11%',
    display: 'flex',
    flexDirection: 'column',
  },
  themeButtons: {
    marginTop: '8px',
  },
  linkContainer: {
    marginRight: '31.5%',
    display: 'flex',

    "& div": {
      marginRight: '24%',
      display: 'flex',
      flexDirection: 'column',
      
      "& span": {
        marginTop: '14px',
      }
    }
  },
}))