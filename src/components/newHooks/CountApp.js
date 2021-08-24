import React, { useState } from 'react';


const CountApp = (props) => {
    // const array = useState(10)
    // not recommended to store all state on a single object
    const [state, setState] = useState({
      count: props.count,
      text: ''
    });
  
    return (
      <div>
        <p>The current {state.text || 'count'} is {state.count}</p>
        <button onClick={() => setState({...state, count: state.count + 1})}>+1</button>
        <button onClick={() => setState({...state, count: props.count})}>Reset</button>
        <button onClick={() => setState({...state, count: state.count -1})}>-1</button>
        <input value={state.text} onChange={(e) => setState({...state, text: e.target.value})}/>
      </div>
    )
  }

  export default CountApp;