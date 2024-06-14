import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className={`box w-60 h-60 my-1 rounded-md p-2 overflow-hidden mx-auto  shadow-lg ${props.coins.changePercent24Hr>0 ? 'bg-green-400':'bg-red-300'} `}>
            <h1 className="font-semibold text-slate-900 text-2xl uppercase">{props.coins.symbol}</h1>
            <p>{props.coins.name}</p>
            <p>{props.coins.rank}</p>
            <p>LTP: ${parseFloat(props.coins.priceUsd).toFixed(5)}</p>
            <p>Vol:  {parseFloat(props.coins.volumeUsd24Hr).toFixed(5)} </p>
            <p>Change: {parseFloat(props.coins.changePercent24Hr).toFixed(5)}</p>
        </div>
    </>
  )
}

export default Card