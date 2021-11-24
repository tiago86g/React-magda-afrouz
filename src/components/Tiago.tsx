import React from 'react'

interface Props {
  name?: string,
  age: number
}

export const Tiago: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      Hi from he is {age} years old
    </div>
  )
}
