import React, { useEffect, useState } from 'react'

export const Timer = () => {
  const [Time, setTime] = useState(new Date())

  useEffect(() => {
    const delta = setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return { Time }
}
