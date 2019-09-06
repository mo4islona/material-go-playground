import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import ResultIcon from './ResultIcon';
import { ServerResponse } from './prop-types/server';

const useStyles = makeStyles((theme) => ({
  errors: {
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'flex-start',
    background: theme.palette.background.paper,
    padding: theme.spacing(1 / 2),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
  },
  errorIcon: {
    color: 'red',
    border: 0,
    background: 'none',
    margin: theme.spacing(1),
  },
  buildResult: {
    fontSize: '0.8rem',
    opacity: 0.6,

  },
  buildText: {
    width: '100%',
    overflow: 'hidden',
  }
}));

export default function Errors({
  result, loading, resultHeight
}) {
  const classes = useStyles();

  if (!result) return null;


  const { Errors: errors } = result;
  if (!errors) return null;

  return (
    <Paper
      className={classes.errors}
      style={{
        opacity: loading ? 0.5 : 1,
        height: resultHeight || 'auto',
        maxHeight: resultHeight || 'auto'
      }}
    >
      <ResultIcon color="red" success={false} />
      <div className={classes.buildText} style={{ height: resultHeight || 'auto', maxHeight: resultHeight || 'auto' }}>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{errors}</pre>
        <pre className={classes.buildResult}>Go build failed.</pre>
      </div>
    </Paper>
  );
}

Errors.propTypes = {
  result: ServerResponse.isRequired,
  loading: PropTypes.bool,
  resultHeight: PropTypes.number.isRequired,
};

Errors.defaultProps = {
  loading: false,
};
