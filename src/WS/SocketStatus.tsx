import { useState } from 'react';

interface SocketStatusTypes {
  status: '🔴' | '🟢';
  notification: string;
}

const Status = () => {
  const [connect, setConnect] = useState<SocketStatusTypes>({
    status: '🔴',
    notification: 'not connected',
  });

  return (
    <>
      <h1>{`${connect.status}	${connect.notification}`}</h1>
    </>
  );
};

export default Status;
