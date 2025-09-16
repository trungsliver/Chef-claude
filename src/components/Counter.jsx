import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0);

  const [goingOut, setGoingOut] = React.useState(false); 
  // const btnGo = goingOut ? "Yes" : "No"; 


  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  function add() {
    setCount(prevCount => prevCount + 1)
  }
  
  function toggleGoingOut() {
    setGoingOut(prevGoingOut => !prevGoingOut)
  }

  return (
    <div className='test-state'>
      <div className="counter-container">
        <h1>Count change</h1>
        <div className="counter">
          <button className="minus" onClick={subtract}>-</button>
          <h2 className="count">{count}</h2>
          <button className="plus" onClick={add}>+</button>
        </div>
      </div>

      <hr />

      <div className="counter-container">
        <h1>Going out</h1>
        <button id="go-out" onClick={toggleGoingOut}>{goingOut ? "Yes" : "No"}</button>
      </div>
    </div>
  )
}

export default Counter
