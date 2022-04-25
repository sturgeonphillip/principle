import { useState } from 'react';

let wsGlobalCheck = false;
export function openWS() {
  if (!window.WebSocket) {
    alert('your browser does not support the WebSocket API.');
  } else {
    // // status element
    // // info element
    // create ws object

    // upon open
    socket.onopen = function () {
      // socketMessage('Connected.');
      wsGlobalCheck = true;
    };
  }
}

const wsURL = `wss://ws.kraken.com/`;
const socket = new WebSocket(wsURL);

const SocketInput = () => {
  const [entry, setEntry] = useState<string>('');

  const consoleActivity = () => {
    // check socket variable is present
    // is it open
    // (browser support tests passed)
    if (wsGlobalCheck) {
      if (entry !== '') {
        socket.send(entry);
        // indicate in console w/ message
        // 'sent message to server: ' + entry --> realistically, 'establishing connection for ${entry}
      } else {
        alert('enter a symbol to be sent.');
      }
    } else {
      alert('must establish a connection first');
    }
  };

  return (
    <>
      <h1>Enter WebSocket Message</h1>
      <input
        type='text'
        value={entry}
        placeholder={'enter a coin'}
        className={`border-red-500`}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button className={`bg-blue-500`} onClick={watchTicker}>
        add coin
      </button>
    </>
  );
};

export default SocketInput;

// TODO component architecture
// TODO format activity flow for user
/**
 * flow:
 * user opens page, sees already watched/saved securities
 * underneath --> request to open socket connections and start showing data
 * loading indicator on display ( or loading spinner )
 *
 * to add a new symbol:
 * maximum? will need to balance load with service worker
 * button with an input field where a ticker is entered
 * user types a symbol
 * underneath --> input data is translated into acceptable format
 * if socket already in place, send new message that adds the ticker to the end of an array to be formatted and sent
 */
//
//
