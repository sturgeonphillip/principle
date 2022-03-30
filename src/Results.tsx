import Token from './Token'; // TODO response types
import { APITokenObject } from './types';
import { FunctionComponent } from 'react';

const Results: FunctionComponent<{ tokens: APITokenObject[] }> = ({
  tokens,
}) => {
  return (
    <div>
      {tokens.map((token) => {
        return (
          <div key={token.id}>
            <Token
              id={token.id}
              symbol={token.symbol}
              name={token.name}
              image={token.image}
              current_price={token.current_price}
              high_24h={token.high_24h}
              low_24h={token.low_24h}
              last_updated={token.last_updated}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
