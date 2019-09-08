import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import FormatIcon from '@material-ui/icons/FormatAlignLeft';
import Button from './Button';
import sendData from './sendData';

const FormatButton = forwardRef((
  {
    url, onError, textOnButton, children, icon
  }, refs
) => {
  const [loading, setIsLoading] = useState();

  const { editor, formatBtn } = refs;

  async function handleClick() {
    setIsLoading(true);

    try {
      const body = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: sendData({
          version: 2,
          body: editor.current.cm.getValue(),
        }),
      });

      editor.current.cm.setValue(await body.text());
    } catch (e) {
      onError(e.toString());
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      ref={formatBtn}
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
