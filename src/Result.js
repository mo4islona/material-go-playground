import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Ok from "@material-ui/icons/Check";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  success: {
    lineHeight: 1.2,
    display: "flex",
    alignItems: "flex-start",
    fontFamily: theme.typography.fontFamily,
    background: theme.palette.background.paper,
    padding: theme.spacing(1 / 2),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    fontSize: "1rem",
  },
  successIcon: {
    color: "green",
    border: 0,
    background: "none",
    margin: theme.spacing(1),
  },
  delay: {
    opacity: 0.5,
    textAlign: "right",
    fontSize: "0.7rem",
    display: "inline-block",
    marginLeft: theme.spacing(1 / 2),
    fontFamily: "monospace",
  },
  buildResult: {
    fontSize: "0.8rem",
    opacity: 0.6,
  },
}));

export default function Result({ events, loading, resultMaxHeight }) {
  const classes = useStyles();

  if (!events || !events.length) return null;

  return (
    <Paper className={classes.success} style={{opacity: loading ? 0.5 : 1}}>
      <IconButton disableRipple className={classes.successIcon}><Ok/></IconButton>
      <div style={{ flex: 1, paddingTop: 12, maxHeight: resultMaxHeight || 'auto', overflow: 'scroll' }}>
        {events.map((l, i) => (
          <div key={i}>{l.Message}<span className={classes.delay}>{l.Delay ? formatDelay(l.Delay) : null}</span></div>
        ))}
        <pre className={classes.buildResult}>Program exited.</pre>
      </div>
    </Paper>
  );
}

function formatDelay(delay) {
  return "+" + delay + "ms";
}
