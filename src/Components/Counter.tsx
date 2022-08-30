import React, { FC } from 'react'

type Counter = {
  value:number
}

export const Counter:FC<Counter> = ({ value }) => {
  return (
    <div>
      <span>{value}</span>
    </div>
  )
}
