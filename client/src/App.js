import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('Initializing...');

  useEffect(() => {
    const sse = new EventSource('http://localhost:5000/stream')

    function handleStream(e) {
      console.log(e)
      setData(e)
    }

    sse.onmessage = e => (handleStream(e.data))

    sse.onerror = e => {
      // DON'T DEPLOY LIKE THIS
      // will stall and stop stream
      sse.close()
    }

    return () => {
      sse.close()
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>The last streaned item was : {data}</p>      
      </header>
    </div>
  );
}

export default App;
