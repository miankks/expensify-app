import React, { useState, useEffect } from 'react';



  const Count = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState('');
  
    // useEffect is equal to componentDidMount and componentDidUpdate

    useEffect(() => {
        console.log('This should only run once!')
    }, [])
    useEffect(() => {
      console.log('useEffect');
      document.title = count;
    }, [count])

    const increment = () => {
      setCount(count +1);
    }
    return (
      <div>
        <p>The current {text || 'count'} is {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={() => setCount(props.count)}>Reset</button>
        <button onClick={() => setCount(count -1)}>-1</button>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
    )
  }

  export default Count;