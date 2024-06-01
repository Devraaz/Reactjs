import React from 'react'
import { CiChat1, CiPhone } from "react-icons/ci";
import Button_black from './Button_black';

const Contact = () => {
    return (
        <>
            <footer className='px-20 my-5'>
                <h1 className='text-slate-950 font-extrabold text-4xl'>CONTACT US</h1>
                <p className='text-slate-800 w-4/5 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus omnis repellat fugiat optio minus laboriosam natus explicabo aliquam nostrum quaerat, dolores, fuga unde dolorem facilis, ad autem eveniet. Enim.</p>
                <section className='flex flex-row items-center border'>
                    <div id="forms " className='w-1/2 border'>
                        <div id="btn1 " className='flex flex-row'>
                            <Button_black name="VIA MESSAGE" icon={<CiChat1 className='w-5 h-5'/>} />
                            <Button_black name="VIA CALL" icon={<CiPhone className='w-5 h-5'/>} />
                        </div>
                        <Button_black name='VIA EMAIL' className="bg-slate-200" />
                        
                        <div className="field">
                            <label htmlFor="name" className='absolute text-md bg-white'>Name</label>
                            <input type="text" className='ring-1 ring-slate-900 w-96  text-xl p-1 m-1'/>
                        </div>
                    </div>
                    <div id="img">

                    </div>
                </section>
            </footer>
        </>
    )
}

export default Contact