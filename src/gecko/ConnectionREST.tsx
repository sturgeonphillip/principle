import { useState } from 'react';

interface connection {
  status: '🔴' | '🟢';
  notification: string;
}
const Connection = () => {
  const [connect, setConnect] = useState<connection>({
    status: '🔴',
    notification: 'not connected',
  });

  return (
    <>
      <h1>{`${connect.status}	${connect.notification}`}</h1>
    </>
  );
};

export default Connection;
