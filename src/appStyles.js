import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#0b1622',
      paper: '#151f2e',
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: '#151f2e',
        color: '#c9d7e3',
        "&:hover": {
          backgroundColor: '#151f2e',
        }
      }
    }
  }
});