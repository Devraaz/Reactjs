import React from 'react'
import shoe from "../assets/shoe_image.png"
import { BsAmazon, BsShop  } from "react-icons/bs";

const Herosection = () => {
    return (
        <>
            <section className='flex flex-col-reverse md:flex-row p-7 w-3/4 items-center justify-center mx-auto mt-5'>
                <div id="text" className="w-full md:w-2/3">
                    <h1 className='text-5xl md:6xl lg:text-7xl xl:text-8xl font-bold mb-10'>YOUR FEET DESERVER THE BEST</h1>
                    <p className='text-md font-normal w-full lg:w-2/4 text-justify  p-3'>Your Feet deserver the besst and we are here to help you with our shoes. Your Feet deserver the besst and we are here to help you with our shoes </p>
                    <div className="buttons space-x-5">
                        <button className="bg-pink-500 text-white p-1 px-4 m-2 hover:bg-pink-600 transition-all">Shop Now</button>
                        <button className="bg-pink-500 text-white p-1 px-4 m-2 hover:bg-pink-600 transition-all">Cateogry</button>
                    </div>
                    <div className="shopping flex space-x-4 items-center mt-6 px-3">
                        <p className='text-sm'>Also available on:</p>
                        <BsAmazon className='w-10'/><BsShop className='w-10'/>
                    </div>
                </div>
                <div id="image " className='w-72 md:w-96'>
                <img src={shoe} alt="" className=''/>
                </div>
            </section>
        </>
    )
}

export default Herosection