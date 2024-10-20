import React, {useEffect, useState} from 'react'

const Effect = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

  return (
    <div>
        <h1>Fetched Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
    </div>
  )
}

export default Effect;