import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/data'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>API: {data.value}</p>
    </div>
  );
}

export default App;
