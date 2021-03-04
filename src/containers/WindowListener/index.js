import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useStore from '../../configureStore';

const WindowListener = props => {
  useEffect(() => {
    window.addEventListener('message', handleEvent);
    return function cleanup() {
      window.removeEventListener('message', handleEvent);
    };
  });

  const { setHidden } = useStore(state => state);
  const handleEvent = event => {
    const { data } = event.data;
    const { action } = data;
    if (action == 'show') {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return <>{props.children}</>;
};

WindowListener.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WindowListener;
