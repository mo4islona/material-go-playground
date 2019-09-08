import { useEffect, useState } from 'react';

function useTextOnButton(useTextOnButton) {
  const [textOnButton, setTextOnButton] = useState(
    useTextOnButton === undefined ? true : useTextOnButton
  );

  useEffect(() => {
    setTextOnButton(useTextOnButton);
  }, [useTextOnButton]);

  return [textOnButton, setTextOnButton];
}
