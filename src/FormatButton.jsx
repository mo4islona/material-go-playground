import React, { forwardRef, useState } from 'react';
import Message from '@material-ui/icons/Message';
import PropTypes from 'prop-types';
import FormatIcon from '@material-ui/icons/FormatAlignLeft';
import Button from './Button';

const FormatButton = forwardRef(({
  url, onError, textOnButton, children, icon
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

export default FormatButton;


FormatButton.propTypes = {
  url: PropTypes.string,
  onError: PropTypes.func,
  textOnButton: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.node,

};

FormatButton.defaultProps = {
  url: 'https://play.golang.org/',
  onError: () => {
  },
  textOnButton: true,
  children: null,
  icon: <FormatIcon />
};
