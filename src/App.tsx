import { render } from 'react-dom';
import { StrictMode } from 'react';

import GeckoData from './geckoREST/GeckoData';

const App = () => {
  return (
    <>
      <StrictMode>
        <div>
          <h1>dogs</h1>
          <GeckoData />
        </div>
      </StrictMode>
      {/* <div>{data}</div> */}
    </>
  );
};

render(<App />, document.getElementById('root'));
export default App;
