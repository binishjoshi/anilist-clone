import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "rbg(81,97,112)",
  },
  selected: {
    paddingLeft: "10px",
  },
}));

export const dropdownStyle = {
  backgroundColor: "#151f2e",
  borderRadius: "6px",
  width: "95%",
};
