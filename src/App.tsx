import { render } from 'react-dom';
import { StrictMode, useRef, useState, useEffect } from 'react';

// import GeckoData from './geckoREST/GeckoData';

const App = () => {
  return (
    <>
      <StrictMode>
        <div>
          {/* <GeckoData /> */}
          <TestWS />
        </div>
      </StrictMode>
      {/* <div>{data}</div> */}
    </>
  );
};

render(<App />, document.getElementById('root'));
