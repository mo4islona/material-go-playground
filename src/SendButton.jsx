import React, { forwardRef, useState } from 'react';
import ArrowPlayIcon from '@material-ui/icons/PlayArrow';
import PropTypes from 'prop-types';
import Button from './Button';

const SimpleButton = forwardRef(({
  url, onError, onRun, onResult, children, icon, color, textOnButton
}, refs) => {
  const [loading, setIsLoading] = useState();

  const { editor, runBtn } = refs;

  async function handleClick() {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('body', editor.current.cm.getValue());

    onRun(true);
    try {
      const body = await fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });

      onResult(await body.json());
    } catch (e) {
      onError(e.toString());
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      ref={runBtn}
      icon={icon}
      loading={loading}
      onClick={handleClick}
      disabled={loading}
      variant="contained"
      color={color}
      textOnButton={textOnButton}
    >
      {children}
    </Button>
  );
});

export default SimpleButton;


SimpleButton.propTypes = {
  url: PropTypes.string,
  onRun: PropTypes.func,
  onResult: PropTypes.func,
  onError: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.node,
  color: PropTypes.string,
  textOnButton: PropTypes.bool,
};

SimpleButton.defaultProps = {
  url: 'https://play.golang.org/',
  icon: <ArrowPlayIcon />,
  color: 'primary',
  textOnButton: true,
  children: null,
  onRun: () => {
  },
  onResult: () => {
  },
  onError: () => {
  },
};
