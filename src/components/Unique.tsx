import React from 'react'
import { Products } from '@/app/utils/mock'
import Image from 'next/image'
const Unique = () => {
  return (
    <div className="grid md:grid-cols-2 lg:col-span-3 max-h-full">

  <div className="md:col-span-2 lg:col-span-3 font-bold text-4xl py-3 flex justify-end">Unique and Authentic Vintage Designer Jewellery</div>
  
  <div className="md:col-span-2 lg:col-span-1">
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
  
  <div className="">
    <Image width={200} src={Products[0].image} alt={Products[0].name}/>
  </div>
  <div className="">Button</div>

</div>

  )
}

export default Unique