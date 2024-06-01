import React from 'react'

const Button_black = (props) => {
  return (
    <>
        <button className='bg-slate-900 p-2 px-5 m-1 rounded-md items-center justify-center space-x-2 flex flex-row hover:bg-slate-950 text-white w-48 text-xs"'>
            {props.icon} &nbsp;{props.name}
        </button>
    
    </>
  )
}

export default Button_black