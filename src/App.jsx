import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    // display: 'flex',
    // height: '100%',
    // flexDirection: 'column'
  },
}));

export default function App({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};
