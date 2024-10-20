import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increament = () => setCount(count + 1)

  return (
    <div className=''>
        <p>{count}</p>
        <button onClick={increament}>Click</button>
    </div>
  )
}

export default Counter;