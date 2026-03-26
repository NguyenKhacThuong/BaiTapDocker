import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('... loading');

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((j) => setMessage(j.message))
      .catch((e) => setMessage('API lỗi: ' + e.message));
  }, []);

  const echo = async () => {
    const resp = await fetch('/api/echo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'Xin chào từ frontend' })
    });
    const data = await resp.json();
    setMessage('Echo: ' + JSON.stringify(data.echo));
  };

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Frontend React</h1>
      <p>Backend trả: <strong>{message}</strong></p>
      <button onClick={echo}>Gửi echo</button>
    </div>
  );
}

export default App;
