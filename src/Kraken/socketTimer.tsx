const socketMessage = (message: string) => {
  let d = new Date();
  let h = d.getUTCHours();
  let m = d.getUTCMinutes();
  let s = d.getUTCSeconds();
  let n = d.getUTCMilliseconds();
  const time = `${h}:${m}:${s}:${n}`;
  const action = message + ' ' + time;
  return <div>{action}</div>;
};

const closeSocket = () => {
  if (wsGlobalCheck) {
    socket.close();
  } else {
    alert('no sockets established');
  }
};
