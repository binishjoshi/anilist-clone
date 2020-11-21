import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { putQuery, searchQuery } from '../../actions/search';

import { useStyles, dropdownStyle } from './styles';

import data from './data';

const DropDown = ({ optionData, putQuery, searchQuery, searchState }) => {
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const { searchConstraints } = searchState;

  const handleChange = (event) => {
    setOption(event.target.value);
    putQuery(optionData, event.target.value);
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

const mapStateToProps = (state) => ({
  searchState: state.searchQuery
});

export default connect(mapStateToProps, { putQuery, searchQuery })(DropDown);