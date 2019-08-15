import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Brightness from "@material-ui/icons/BrightnessMedium";
import Keyboard from "@material-ui/icons/Keyboard";
import Info from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";
import createTheme from "./createTheme";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,

  },
  list: {
    width: 250,
    background: theme.palette.background.paper,
  },
  about: {
    '& a': {
      color: theme.palette.secondary.light
    },

    '& *': {
      fontSize: '0.9rem',
      fontFamily: theme.typography.fontFamily
    },

    '& p, & li': {
      lineHeight: 1.2,
      marginBottom: theme.spacing(2)
    },
  }
}));

export default function Settings({theme, setTheme, themeExtend, settingsIconStyle}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const classes = useStyles();

  function handleMenuClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function changeTheme() {
    setTheme(createTheme(theme.palette.type === "dark" ? "light" : "dark", themeExtend));
  }

  function toggleAboutDialog() {
    setAboutOpen(!aboutOpen)
  }


  return <>
    <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleMenuClose} className={classes.root}>
      <List disablePadding className={classes.list}>
        <MenuItem>
          <ListItemIcon>
            <Keyboard/>
          </ListItemIcon>
          <ListItemText secondary="Keyboard shortcut"/>
        </MenuItem>
        <MenuItem button onClick={changeTheme}>
          <ListItemIcon>
            <Brightness/>
          </ListItemIcon>
          <ListItemText secondary="Dark theme"/>
          <ListItemSecondaryAction>
            <Switch
              onChange={changeTheme}
              edge="end"
              checked={theme.palette.type === "dark"}
            />
          </ListItemSecondaryAction>
        </MenuItem>
        <Divider/>
        <MenuItem button onClick={toggleAboutDialog}>
          <ListItemIcon>
            <Info/>
          </ListItemIcon>
          <ListItemText secondary="About"/>
        </MenuItem>
      </List>
    </Menu>
    <IconButton onClick={handleMenuClick} style={{color: "#fff", ...settingsIconStyle}}>
      <SettingsIcon/>
    </IconButton>

    <Dialog
      open={aboutOpen}
      onClose={toggleAboutDialog}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
    >
      <DialogTitle id="scroll-dialog-title">About the Playground</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.about}>
          <Typography variant="body1">
            The Go Playground is a web service that runs on <a href="https://golang.org/">golang.org</a>'s servers.<br />
            The service receives a Go program, <a href="https://golang.org/cmd/vet/">vets</a>, compiles, links, and<br />
            runs the program inside a sandbox, then returns the output.
          </Typography>

          <Typography variant="body1">
            If the program contains <a href="https://golang.org/pkg/testing">tests or examples</a> and no main function, the service runs the tests.<br />
            Benchmarks will likely not be supported since the program runs in a sandboxed environment with limited resources.
          </Typography>

          <Typography variant="body1">
            There are limitations to the programs that can be run in the playground:
          </Typography>

          <ul>
            <li>
              The playground can use most of the standard library, with some exceptions.<br />
              The only communication a playground program has to the outside world is by writing to standard output and standard error.
            </li>

            <li>
              In the playground the time begins at 2009-11-10 23:00:00 UTC (determining the significance of this date is an exercise for the reader). This makes it easier to cache programs by giving them deterministic output.
            </li>

            <li>
              There are also limits on execution time and on CPU and memory usage.
            </li>
          </ul>

          <Typography variant="body1">
            The article "<a href="https://blog.golang.org/playground" target="_blank" rel="noopener">Inside
            the Go Playground</a>" describes how the playground is implemented.
            The source code is available at <a href="https://go.googlesource.com/playground" target="_blank" rel="noopener">https://go.googlesource.com/playground</a>.
          </Typography>

          <Typography variant="body1">
            The playground uses the latest stable release of Go.<br/>
            The current version is <a href="/p/Ztyu2FJaajl">go1.12.8</a>.
          </Typography>

          <Typography variant="body1">
            The playground service is used by more than just the official Go project (<a
            href="https://gobyexample.com/">Go by Example</a> is one other instance)
            and we are happy for you to use it on your own site.
            All we ask is that you <a href="mailto:golang-dev@googlegroups.com">contact us first (note this is a public
            mailing list)</a>,
            use a unique user agent in your requests (so we can identify you),
            and that your service is of benefit to the Go community.
          </Typography>

          <Typography variant="body1">
            Any requests for content removal should be directed to <a
            href="mailto:security@golang.org">security@golang.org</a>.
            Please include the URL and the reason for the request.
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  </>;
}
