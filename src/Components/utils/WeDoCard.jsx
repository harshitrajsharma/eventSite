import React from 'react'

const WeDoCard = (props) => {
  return (
    <div className=' flex justify-center px-6 py-6 border-b-2 border-gray-600'>
      <h1 className=' font-bold'>{props.text}</h1>
    </div>
  )
}

export default WeDoCard
