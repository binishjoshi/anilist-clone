import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0038ac'
    },
  }
});

export const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    height: '49px',
    width: '200px',
    borderRadius: '30px',
  }
}));