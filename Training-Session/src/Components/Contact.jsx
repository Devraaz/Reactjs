import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { CiChat1, CiTrash, CiEdit, CiPhone } from "react-icons/ci";
import Button_black from './Button_black';
import axios from 'axios';
import Loader from './Loader';
import Alert from './Alert';
import DataFetch from './DataFetch';

const Contact = () => {

    const [error, setError] = useState(null)
    const [data, setData] = useState([]);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    


    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/viewset/student_api/', data)
            console.log('response: ', res.data)
            reset();
            
            return <Alert msg="Message Sent Successfully. We will contact you soon" className="sticky top-2" />
        } catch (err) {
            console.error('Response', error)
        }
    }

   
    return (
        <>
        <DataFetch />

            <footer className='md:px-20 px-10 my-5 '>
                <h1 className='text-slate-950 font-extrabold text-4xl'>CONTACT US</h1>
                <p className='text-slate-800 w-full md:w-4/5  my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus omnis repellat fugiat optio minus laboriosam natus explicabo aliquam nostrum quaerat, dolores, fuga unde dolorem facilis, ad autem eveniet. Enim.</p>
                <section className='flex flex-row items-center border'>
                    <div id="forms " className='w-full md:w-1/2 border'>
                        <div id="btn1 " className='flex flex-row'>
                            <Button_black name="VIA MESSAGE" icon={<CiChat1 className='w-5 h-5' />} />
                            <Button_black name="VIA CALL" icon={<CiPhone className='w-5 h-5' />} />
                        </div>
                        <Button_black name='VIA EMAIL' className="bg-slate-200 w-full" />

                        {isSubmitting && <Loader className="mx-auto w-full" />}
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3 p-5'>

                            <label htmlFor="name" className='text-xl'>Name:</label>
                            <input placeholder="Sumit..." {...register("name", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 3, message: "Min length should be 3" },
                                maxLength: { value: 15, message: "Max length should be 15" },
                            })} className='p-1 border w-96 font-medium text-xl' />
                            {errors.name && <div className='text-red-500 text-sm'>{errors.name.message}</div>}


                            <label htmlFor="roll" className='text-xl'>Roll:</label>
                            <input {...register("roll", {
                                required: { value: true, message: "This field is required" },
                                min: { value: 100, message: "Min length should be 100" },
                                max: { value: 200, message: "Max length should be 200" },
                            })} className='p-1 border w-96 font-medium text-xl' />

                            {errors.roll && <div className='text-red-500 text-sm'>{errors.roll.message}</div>}


                            <label htmlFor="city" className='text-xl'>City:</label>
                            <input {...register("city", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 3, message: "Min length should be 3" },
                                maxLength: { value: 15, message: "Max length should be 15" },
                            })} className='p-1 border w-96 font-medium text-xl' />

                            {errors.city && <div className='text-red-500 text-sm'>{errors.city.message}</div>}

                            <Button_black disabled={isSubmitting} type="submit" name='SUBMIT' />
                        </form>
                    </div>
                    <div id="img">

                    </div>
                </section>
            </footer>
        </>
    )
}

export default Contact