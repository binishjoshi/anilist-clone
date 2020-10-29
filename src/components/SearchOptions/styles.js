import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  searchOptionContainer: {
    color: '#c9d7e3',
    display: 'grid',
    gridTemplateColumns: 'auto 42px',
    gridGap: '10px',
  },
  searchBoxesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5,155px)',
    gridGap: '24px',
  },
  input: {
    backgroundColor: '#151f2e',
    padding: '7.5px 14px',
    color: '#87a0b2',
    border: 'none',
    width: '80%',
    height: '8%',
    borderRadius: '6px',
    marginTop: '4px',
  },
  button: {
    height: '38px',
    width: '38px',
    minWidth: '38px',
    marginTop: '70%',
    marginLeft: '55%',
  },
})