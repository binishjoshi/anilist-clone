import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  displayCard: {
    color: "rgb(81,97,112)",
    marginBottom: "45px",
  },
  heading: {
    display: "flex",
    textDecoration: "none",
    justifyContent: "space-between",
    color: "rgb(81,97,112)",
    marginRight: "32px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,20%)",
    marginTop: "10px",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      fontSize: "0.9em",
      "& img": {
        borderRadius: "4px",
        maxHeight: "280px",
        marginBottom: "5px",
      },
    },
  },
}));
