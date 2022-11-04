import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
          <img src={val.cover} alt='' />
          </h1>
          <p>{val.desc}</p>
          {/* <button className='outline-btn'>GET STARTED</button> */}
        </div>
      ))}
    </>
  )
}

export default PriceCard
