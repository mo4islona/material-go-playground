import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Ok from '@material-ui/icons/Check';
import Error from '@material-ui/icons/Warning';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  icon: {
    border: 0,
    background: 'none',
    margin: theme.spacing(1),
  },
}));

export default function ResultIcon({ color, success }) {
  const classes = useStyles();

  return (
    <IconButton
      disableRipple
      className={classes.icon}
      style={{ color }}
    >
      {success ? <Ok /> : <Error />}
    </IconButton>
  );
}

ResultIcon.propTypes = {
  success: PropTypes.bool,
  color: PropTypes.string
};

ResultIcon.defaultProps = {
  success: true,
  color: 'green'
};
