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
import Brightness from "@material-ui/icons/BrightnessMedium";
import Keyboard from "@material-ui/icons/Keyboard";
import Info from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";
import createTheme from "./createTheme";
import AboutModal from "./AboutModal";
import ShortKeyModal from "./ShortKeyModal";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,

  },
  list: {
    width: 250,
    background: theme.palette.background.paper,
  },
}));

export default function Settings({theme, setTheme, themeExtend, settingsIconStyle}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [shortKeyOpen, setshortKeyOpen] = useState(false);
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

  function toggleAboutModal() {
    setAboutOpen(!aboutOpen)
  }

  function toggleShortKeyModal() {
    setshortKeyOpen(!shortKeyOpen)
  }

  return <>
    <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleMenuClose} className={classes.root}>
      <List disablePadding className={classes.list}>
        <MenuItem button onClick={toggleShortKeyModal}>
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
        <MenuItem button onClick={toggleAboutModal}>
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

    <AboutModal open={aboutOpen} handleToggle={toggleAboutModal}/>
    <ShortKeyModal open={shortKeyOpen} handleToggle={toggleShortKeyModal}/>
  </>;
}
