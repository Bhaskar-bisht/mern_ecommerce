import React, { useEffect, useState } from 'react'
import { backend_url } from '../server.js'
import Item from './Item.jsx'

function NewArrivals() {

  const [newCollection, setNewCollection] = useState([])


  useEffect(() => {
    fetch(`${backend_url}/newcollections`).then((res) => res.json()).then((data) => setNewCollection(data))
  }, [])

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='h3'>New Arrivals</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto provident quibusdam commodi iste voluptas.</p>
      </div>
      {/* container */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
        {newCollection.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
