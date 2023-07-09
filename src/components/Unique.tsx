import React from 'react'
import { Products } from '@/app/utils/mock'
import Image from 'next/image'
import { Button } from './ui/button'
const Unique = () => {
  return (
    <div className="grid md:grid-cols-2 lg:col-span-4 gap-x-4">

  <div className="md:col-span-2 lg:col-span-4 font-bold text-4xl py-3 flex justify-end">Unique and Authentic Vintage Designer Jewellery</div>
  
  <div className="md:col-span-2 ">
    <div className="flex gap-2">
      <div className="lg:col-span-2">
        <span className="font-bold text-xl py-3">Using Good Quality Materials</span> 
        <p>
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
      <div className="">
        <span className="font-bold text-xl py-3">Using Good Quality Materials</span> 
        <p>
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    <div className="flex gap-2">
      <div className="">
        <span className="font-bold text-xl py-3">Using Good Quality Materials</span> 
        <p>
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
      <div className="">
        <span className="font-bold text-xl py-3">Using Good Quality Materials</span> 
        <p>
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
  

  <div className="flex justify-center  pt-9">
    <Image width={200} src={Products[0].image} alt={Products[0].name}/>
  </div>
  <div className="py-9">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aperiam qui odit, atque quibusdam expedita? Ullam, illum placeat veritatis a eligendi error rerum quasi earum harum expedita, commodi, unde autem!</p>
    <div className=""><Button>See All Products</Button></div>
  </div>

  </div>


  )
}

export default Unique