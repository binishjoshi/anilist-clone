import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
	root: {
		color: '#fdf7f3',
		textTransform: 'none',
		backgroundColor: '#0038ac',
		'&:hover': {
			backgroundColor: '#0038ac',
		},
	},
}))(Button);

export default ColorButton;