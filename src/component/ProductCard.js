import React from 'react'

function ProductCard({item}) {
  return (
    <div>
        <div className='overflow-hidden'>
      <img className='card-img' src={item?.img}/>
        </div>
        <div>{item?.choice == true ? "Concious choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true ? "신제품":""}</div>
    </div>
  )
}

export default ProductCard
