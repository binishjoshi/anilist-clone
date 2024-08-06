import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    textDecoration: "none",
    justifyContent: "space-between",
    color: "rgb(81,97,112)",
    marginRight: "32px",
  },
}));

export const rowStyles = makeStyles((theme) => ({
  rowContainer: {
    color: "#afbed5",
    display: "grid",
    gridTemplateColumns: "10% 90%",
    marginTop: "15px",
    marginBottom: "20px",
  },
  rank: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rowInfo: {
    display: "grid",
    gridTemplateColumns: "8% 47% 14% 14% 14%",
    backgroundColor: "#151f2e",
    borderRadius: "5px",
    minHeight: "80px",
    "& img": {
      height: "65px",
      padding: "7px",
      borderRadius: "2px",
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& span": {
      marginLeft: "35%",
      width: "69vw",
    },
  },
  genres: {
    fontSize: "0.7em",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    "& div": {
      marginRight: "10px",
      backgroundColor: "brown",
      padding: "6px",
      borderRadius: "14px",
      height: "7px",
    },
  },
  name: {
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    "& p": {
      marginBottom: "4px",
      fontWeight: "401",
    },
  },
  moreInfo: {
    "& h6:first-child": {
      fontSize: "0.9rem",
      fontWeight: "401",
    },
    "& h6:last-child": {
      fontSize: "0.75rem",
      fontWeight: "400",
    },
  },
}));

export const genreStyles = {
  flexDirection: "row",
  justifyContent: "left",
};
