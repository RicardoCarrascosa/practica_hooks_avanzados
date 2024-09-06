import React from 'react'

const Clock = ({ timer }) => {
  // console.log(timer)
  return (
    <div>
      <h3>{timer.toLocaleTimeString()} </h3>
    </div>
  )
}

export default Clock
