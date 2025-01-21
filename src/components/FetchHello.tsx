import { useState, useEffect } from 'react';

export default function FetchHello() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data...");
      try {
        const response = await fetch('http://127.0.0.1:8000/api/hello/');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error: Could not fetch data');
      }
    }

    fetchData();
  }, []);

  return <h1>{message}</h1>;
}

