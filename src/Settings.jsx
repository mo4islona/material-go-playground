import React, { useState } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Brightness from '@material-ui/icons/BrightnessMedium';
import Keyboard from '@material-ui/icons/Keyboard';
import ViewCompact from '@material-ui/icons/ViewCompact';
import Info from '@material-ui/icons/Info';
import ImportIcon from '@material-ui/icons/FileCopy';
import SettingsIcon from '@material-ui/icons/Settings';
import createTheme from './createTheme';
import AboutModal from './AboutModal';
import ShortKeyModal from './ShortKeyModal';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,

  },
  list: {
    width: 250,
    background: theme.palette.background.paper,
  },
}));

export default function Settings({
  theme,
  handleThemeChange,
  themeExtend,
  settingsIconStyle,
  setTextOnButton,
  textOnButton,
  disableThemeSwitch,
  useFormatImport,
  setImportFormat
}) {
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
    handleThemeChange(createTheme(theme.palette.type === 'dark' ? 'light' : 'dark', themeExtend));
  }

  function toggleAboutModal() {
    setAboutOpen(!aboutOpen);
  }

  function toggleShortKeyModal() {
    setshortKeyOpen(!shortKeyOpen);
  }

  function toggleTestButton() {
    setTextOnButton(!textOnButton);
  }

  return (
    <>
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        className={classes.root}
      >
        <List disablePadding className={classes.list}>
          <MenuItem button>
            <ListItemIcon>
              <ImportIcon />
            </ListItemIcon>
            <ListItemText secondary="Imports" />
            <ListItemSecondaryAction>
              <Switch
                onChange={setImportFormat}
                edge="end"
                checked={useFormatImport}
              />
            </ListItemSecondaryAction>
          </MenuItem>
          <MenuItem button onClick={toggleTestButton}>
            <ListItemIcon>
              <ViewCompact />
            </ListItemIcon>
            <ListItemText secondary="Compact button" />
            <ListItemSecondaryAction>
              <Switch
                onChange={toggleTestButton}
                edge="end"
                checked={!textOnButton}
              />
            </ListItemSecondaryAction>
          </MenuItem>
          {!disableThemeSwitch && (
            <MenuItem button onClick={changeTheme}>
              <ListItemIcon>
                <Brightness />
              </ListItemIcon>
              <ListItemText secondary="Dark theme" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={changeTheme}
                  edge="end"
                  checked={theme.palette.type === 'dark'}
                />
              </ListItemSecondaryAction>
            </MenuItem>
          )}
          <Divider />
          <MenuItem button onClick={toggleShortKeyModal}>
            <ListItemIcon>
              <Keyboard />
            </ListItemIcon>
            <ListItemText secondary="Keyboard shortcut" />
          </MenuItem>
          <MenuItem button onClick={toggleAboutModal}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText secondary="About" />
          </MenuItem>
        </List>
      </Menu>
      <IconButton onClick={handleMenuClick} style={{ color: '#fff', ...settingsIconStyle }}>
        <SettingsIcon />
      </IconButton>

      <AboutModal open={aboutOpen} handleToggle={toggleAboutModal} />
      <ShortKeyModal open={shortKeyOpen} handleToggle={toggleShortKeyModal} />
    </>
  );
}

Settings.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  themeExtend: PropTypes.objectOf(PropTypes.any).isRequired,
  handleThemeChange: PropTypes.func.isRequired,
  setTextOnButton: PropTypes.func.isRequired,
  textOnButton: PropTypes.bool.isRequired,
  disableThemeSwitch: PropTypes.bool.isRequired,
  settingsIconStyle: PropTypes.objectOf(PropTypes.string),
};

Settings.defaultProps = {
  settingsIconStyle: {}
};
