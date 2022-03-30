import { TokenProps } from './types';

const Token = (props: TokenProps) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    high_24h,
    low_24h,
    last_updated,
  } = props;

  return (
    <>
      <div key={id}>
        <h1 className='text-xl font-semibold'>{`${name} (${symbol})`}</h1>
        {/* <p>{image}</p> */}
        <img src={image} alt={name} className={`h-9 w-9`} />
        <h2>{current_price}</h2>
        <h3>{`Last 24hr: high ${high_24h} low ${low_24h}`}</h3>
        <h3>{`Updated: ${last_updated}`}</h3>
      </div>
    </>
  );
};

export default Token;

// `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,eos`;

// const props = [
//   id,
//   symbol,
//   name,
//   image,
//   current_price,
//   high_24h,
//   low_24h,
//   last_updated,
// ];

// const {
//   id,
//   symbol,
//   name,
//   image,
//   current_price,
//   market_cap,
//   market_cap_rank,
//   fully_diluted_valuation,
//   total_volume,
//   high_24h,
//   low_24h,
//   price_change_24h,
//   price_change_percentage_24h,
//   market_cap_change_24h,
//   market_cap_change_percentage_24h,
//   circulating_supply,
//   total_supply,
//   max_supply,
//   ath,
//   ath_change_percentage,
//   ath_date,
//   atl,
//   atl_change_percentage,
//   atl_date,
//   roi,
//   last_updated,
// } = TokenProps;
