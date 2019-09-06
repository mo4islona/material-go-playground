import React, { forwardRef, useState } from 'react';
import Message from '@material-ui/icons/Message';
import PropTypes from 'prop-types';
import Button from './Button';

const ShareButton = forwardRef(({
  url, onError, useTextOnButton, children
}, refs) => {
  const [loading, setIsLoading] = useState();

  const { editor } = refs;

  async function handleClick() {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('body', editor.current.cm.getValue());

    try {
      const body = await fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
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
      icon={<Message />}
      loading={loading}
      onClick={handleClick}
      disabled={loading}
      variant="contained"
      color="primary"
      useTextOnButton={useTextOnButton}
    >
      {children}
    </Button>
  );
});

export default ShareButton;


ShareButton.propTypes = {
  url: PropTypes.string,
  onError: PropTypes.func,
  useTextOnButton: PropTypes.bool,
  children: PropTypes.node,
};

ShareButton.defaultProps = {
  url: 'https://play.golang.org/',
  onError: () => {
  },
  useTextOnButton: true,
  children: null,
};
