import React, {useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0)

  const inc = () => setCount(count + 1)
  const reset = () => setCount(0)
  return (
    <div className=''>
        {count}
        <button onClick={inc}>Click</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default State;