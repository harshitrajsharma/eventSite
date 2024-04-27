import React from 'react'
import WeDoCard from './utils/WeDoCard'
import {whatWeDoData} from './whatWeDoData'

const WeDo = () => {
  return (
    <div className='px-8 lg:px-40 xl:px-48 bg-black text-white py-8 flex flex-col gap-8 items-center'>
        <h1 className=' text-3xl font-bold'>What we do</h1>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-2 border-gray-600 px-12 pt-4 pb-16 rounded-3xl'>
      {whatWeDoData.map((data, index) => <WeDoCard key={index} text={data.text}/>)}
      </div>
    </div>
  )
}

export default WeDo
