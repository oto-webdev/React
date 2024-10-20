import React, { useEffect, useState } from 'react';

const Data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const randomPost = jsonData[Math.floor(Math.random() * jsonData.length)];
        setData(randomPost);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
};

export default Data;
