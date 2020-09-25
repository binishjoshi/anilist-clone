import { createMuiTheme ,makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#152232',
    }
  }
});

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: '11%',
    marginRight: '5%',
  },
  linksContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  links: {
    paddingRight: '2%',
    textDecoration: 'none',
    color: '#afbed5',
    fontFamily: 'sans-serif',
    fontSize: '0.8em',
  },
  login: {
    paddingRight: '2.5%',
    textDecoration: 'none',
    color: '#afbed5',
    marginLeft: '70px',
    fontFamily: 'arial',
    fontSize: '0.8em',
  },
  offset: theme.mixins.toolbar,
}));