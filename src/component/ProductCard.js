import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({item}) {
    const navigate = useNavigate()
    const showDetail = ()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div onClick={showDetail}>
        <div className='overflow-hidden'>
      <img className='card-img' src={item?.img} alt=''/>
        </div>
        <div>{item?.choice == true ? "Concious choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true ? "신제품":""}</div>
    </div>
  )
}

export default ProductCard
