const socketMessage = (message: string) => {
  const d = new Date();
  const h = d.getUTCHours();
  const m = d.getUTCMinutes();
  const s = d.getUTCSeconds();
  const n = d.getUTCMilliseconds();
  const time = `${h}:${m}:${s}:${n}`;
  const action = message + ' ' + time;
  return <div>{action}</div>;
};

// const closeSocket = () => {
//   if (wsGlobalCheck) {
//     socket.close();
//   } else {
//     alert('no sockets established');
//   }
// };
