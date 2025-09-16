import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0);

  function subtract(){
    setCount(count - 1) 
    setCount(count - 1) 
    setCount(count - 1) 
  }

  function add(){
    setCount(prevCount => prevCount + 1) 
    setCount(prevCount => prevCount + 1) 
    setCount(prevCount => prevCount + 1) 
  }

  return (
    <main className="counter-container">
      <h1>Count change</h1>
      <div className="counter">
        <button className="minus" onClick={subtract}>-</button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={add}>+</button>
      </div>
    </main>
  )
}

export default Counter
