import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MatButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  iconWrapper: {
    position: "relative",
    display: "flex",
  },
  progress: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 10,
    "& svg": {
      color: theme.palette.secondary.main,
    },
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}));


const Button = React.forwardRef(({ editor, url, icon, children, onRun, onResult, onError, compactButtons }, ref) => {
  const [loading, setIsLoading] = useState();
  const classes = useStyles();

  async function onClick() {
    setIsLoading(true);

    if (typeof onRun === "function") onRun();

    const formData = new FormData();
    formData.append("body", editor.current.cm.getValue());

    try {
      const body = await fetch(url, {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      onResult(await body.json());
    } catch (e) {
      onError(e.toString());
    }
    setIsLoading(false);
  }

  return (
    <MatButton ref={ref} onClick={onClick} disabled={loading} variant="contained" color="primary">
      <div className={classes.iconWrapper}>
        {icon}
        <Fade in={loading} timeout={100}>
          <div className={classes.progress}><CircularProgress color="secondary" size={24}/></div>
        </Fade>
      </div>
      {!compactButtons && <div className={classes.text}>{children}</div>}
    </MatButton>
  );
})

export default Button;
