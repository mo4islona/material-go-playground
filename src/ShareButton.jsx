import React, { forwardRef, useState } from 'react';
import Message from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import Button from './Button';

const ShareButton = forwardRef(({
  url, onError, textOnButton, children, icon
}, refs) => {
  const [loading, setIsLoading] = useState();

  const { editor } = refs;

  async function handleClick() {
    setIsLoading(true);

    try {
      const body = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
        body: editor.current.cm.getValue(),
      });

      window.location.hash = await body.text();
    } catch (e) {
      onError(e.toString());
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      icon={icon}
      loading={loading}
      onClick={handleClick}
      disabled={loading}
      variant="contained"
      color="primary"
      textOnButton={textOnButton}
    >
      {children}
    </Button>
  );
});

export default ShareButton;


ShareButton.propTypes = {
  url: PropTypes.string,
  onError: PropTypes.func,
  textOnButton: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.node,
};

ShareButton.defaultProps = {
  url: 'https://play.golang.org/',
  onError: () => {
  },
  textOnButton: true,
  children: null,
  icon: <Message />
};
