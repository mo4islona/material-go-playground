import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MatButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    position: 'relative',
    display: 'flex',
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 10,
    '& svg': {
      color: theme.palette.secondary.main,
    },
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}));


const Button = (
  {
    icon,
    children,
    loading,
    textOnButton,
    onClick,
  }
) => {
  const classes = useStyles();

  return (
    <MatButton size={textOnButton ? 'medium' : 'small'} disabled={loading} onClick={onClick} variant="contained" color="primary">
      <div className={classes.iconWrapper}>
        {icon}
        <Fade in={loading} timeout={100}>
          <div className={classes.progress}><CircularProgress color="secondary" size={24} /></div>
        </Fade>
      </div>
      {textOnButton && <div className={classes.text}>{children}</div>}
    </MatButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  useTextOnButton: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {
  },
  loading: false,
  useTextOnButton: true,
  icon: null,
  children: null,
};
