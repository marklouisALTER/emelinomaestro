import React from 'react'
import { GrHostMaintenance } from "react-icons/gr";

export const Products:React.FC = () => {
  return (
    <section className='w-full h-screen flex flex-col gap-2 items-center justify-center'>
      <GrHostMaintenance className='text-5xl text-gray-400'/>
      <p className='text-sm font-primary text-gray-400'>Currently working</p>
    </section>
  )
}
