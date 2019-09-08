import React, { forwardRef } from 'react';

const Editor = forwardRef(({
  className,
  style
}, ref) => <div className={className} ref={ref} style={style} />);

export default Editor;
