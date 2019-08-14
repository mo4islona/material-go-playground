import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Error from "@material-ui/icons/ReportProblem";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  errors: {
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "flex-start",
    background: theme.palette.background.paper,
    padding: theme.spacing(1 / 2),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
  },
  errorIcon: {
    color: "red",
    border: 0,
    background: "none",
    margin: theme.spacing(1),
  },
  buildResult: {
    fontSize: "0.8rem",
    opacity: 0.6,
  },
}));

export default function Errors({ errors, loading }) {
  const classes = useStyles();

  if (!errors) return null;

  return (
    <Paper className={classes.errors} style={{opacity: loading ? 0.5 : 1}}>
      <IconButton disableRipple className={classes.errorIcon}><Error/></IconButton>
      <div>
        <pre style={{ whiteSpace: "pre-wrap" }}>{errors}</pre>
        <pre className={classes.buildResult}>Go build failed.</pre>
      </div>
    </Paper>
  );
}
