import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  searchOptionContainer: {
    color: "rbg(81,97,112)",
    display: "grid",
    gridTemplateColumns: "auto 42px",
    gridGap: "10px",
    paddingLeft: 0,
    paddingRight: "4%",
    marginBottom: "20px",
    marginTop: "6%",
  },
  searchBoxesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5,155px)",
    gridGap: "24px",
  },
  searchConstraintsContainer: {
    display: "flex",
    color: "rgb(81,97,112)",
    "& p": {
      fontSize: "0.8rem",
    },
  },
  constraintContainer: {
    display: "flex",
    marginRight: "10px",
    backgroundColor: "#0b70a4",
    padding: "2px 7px 4px 7px",
    borderRadius: "6px",
    "&:hover": {
      cursor: "pointer",
      "& svg": {
        display: "block",
      },
    },
    "& svg": {
      display: "none",
    },
  },
  input: {
    backgroundColor: "#151f2e",
    padding: "7.5px 14px",
    color: "#87a0b2",
    border: "none",
    width: "80%",
    height: "8%",
    borderRadius: "6px",
    marginTop: "4px",
  },
  button: {
    height: "38px",
    width: "38px",
    minWidth: "38px",
    marginTop: "70%",
    marginLeft: "55%",
  },
});
