import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import useStore from '../../configureStore'
import GlobalStyle from '../../globalStyles';

const H1 = styled('h1')`
  font-family: Pricedown;
`;

const App = () => {
  const { hidden } = useStore(state => state)

  return (
  <div>
    <h1 style={{fontFamily: "Pricedown", visibility: hidden ? "hidden" : "visible"}}>Hello world</h1>

    <GlobalStyle />
  </div>
  )
}

export default App;
