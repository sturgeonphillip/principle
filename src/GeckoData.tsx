import { FunctionComponent, useState, useEffect } from 'react';
import { APITokenObject } from './types';
import Results from './Results';

const GeckoData: FunctionComponent = () => {
  const [tokens, setTokens] = useState<APITokenObject[]>(
    [] as APITokenObject[]
  );

  useEffect(() => {
    getGeckos();
  }, []);
  const currency = 'bitcoin,ethereum,eos';
  async function getGeckos() {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currency}`
    );
    const json = (await res.json()) as APITokenObject[];

    setTokens(json);
  }

  return (
    <>
      <Results tokens={tokens} />
    </>
  );
};

export default GeckoData;
