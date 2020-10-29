import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { putQuery } from '../../actions/search';
import { PUT_FORMAT, PUT_GENRE, PUT_SEASON, PUT_YEAR } from '../../actions/types';

import { useStyles, dropdownStyle } from './styles';

import data from './data';

const DropDown = ({ optionData, putQuery }) => {
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
    
    switch (optionData) {
      case 'genres':
        putQuery(PUT_GENRE, event.target.value);
        break;
      case 'year':
        putQuery(PUT_YEAR, event.target.value);
        break;
      case 'season':
        putQuery(PUT_SEASON, event.target.value);
        break;
      case 'format':
        putQuery(PUT_FORMAT, event.target.value);
        break;
      default:
        console.log('Error in search query');
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let options;
  if (optionData === 'year') {
    options = Array.from({length: 82}, (_, i) => i + 1940)
    options.reverse();
  } else {
    options = data[optionData];  
  }

  return (
    <div>
      <FormControl className={classes.formControl} style={dropdownStyle}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={option}
          onChange={handleChange}
          className={classes.selected}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            options.map(option => (
              <MenuItem value={option} key={uniqid()}>{option}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
};

export default connect(null, { putQuery })(DropDown);