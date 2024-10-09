import React from 'react'
import './clock.css'
const Clock = ({ timer }) => {
  return (
    <div className='clock'>
      <h2>{timer.toLocaleTimeString()} </h2>
    </div>
  )
}

export default Clock
