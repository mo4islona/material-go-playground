import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
  },
}));

export default function AppBar({children}) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
