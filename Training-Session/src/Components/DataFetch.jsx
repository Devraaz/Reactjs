import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import Loader from './Loader';
import Button_black from './Button_black';
import Alert from './Alert';
import { CiChat1, CiTrash, CiEdit, CiPhone } from "react-icons/ci";




const DataFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [edit, setEdit] = useState(false)
    const [editID, setEditID] = useState(null)
    const editSectionRef = useRef(null); // Create a reference for the edit section

    const [query, setQuery] = useState('');

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:8000/viewset/student_api/', {
                params: query ? { query } : {}
            });
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()


    const handleDelete = async (id) => {
        console.log(id)

        try {
            const res = await axios.delete(`http://127.0.0.1:8000/viewset/student_api/${id}`)
            console.log(res.data)
            fetchData();
        } catch (err) {
            setError(err)
        }

    }

    const toggle = () => {
        setEdit(prevState => !prevState)
        if (!edit) {
            setTimeout(() => {
                editSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    const handleEdit = async (id, e, name, roll, city) => {
        e.preventDefault()
        toggle()
        setEditID(id)
        setValue('name', name)
        setValue('roll', roll)
        setValue('city', city)

    }

    const onSubmit = async (data) => {
        try {
            const res = await axios.put(`http://127.0.0.1:8000/viewset/student_api/${editID}/`, data)
            console.log('response: ', res.data)
            reset()
            toggle()
            
            fetchData()
            return <Alert msg="Message Sent Successfully. We will contact you soon" />

        } catch (err) {
            console.error('Response', error)
        }
    }

    if (loading) {
        return <Loader className="mx-auto w-full" />
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div className='p-10 text-lg border w-full md:w-3/4 bg-slate-700 text-slate-300 rounded-md shadow-lg mx-auto space-y-5'>
                <h1 className='text-xl'>Fetched Data</h1>
                <input type="text" value={query} onChange={handleInputChange} placeholder="Search Name..." className='p-1 border w-96 font-medium text-lg text-slate-800' />

                <table className='overflow-y-scroll'>
                    <thead>
                        <tr className=' w-full p-1'>
                            <td className='w-60 font-bold'> ID</td>
                            <td className='w-60 font-bold'> Name</td>
                            <td className='w-60 font-bold'> Roll</td>
                            <td className='w-60 font-bold'> City</td>
                            <td className='w-60 font-bold'> Action

                            </td>
                        </tr>
                    </thead>
                    <tbody className=' p-1'>

                        {data.map(student => {
                            return <tr key={student.id} className=' w-full p-1'>
                                <td className='w-60'>{student.id} </td>
                                <td className='w-60'>{student.name} </td>
                                <td className='w-60'>{student.roll}</td>
                                <td className='w-60'>{student.city}</td>
                                <td className='w-60 space-x-5'>
                                    <button className='hover:bg-slate-600 transition-all' onClick={(e) => handleEdit(student.id, e, student.name, student.roll, student.city)} >
                                        <CiEdit />

                                    </button>
                                    <button className='hover:bg-slate-600 transition-all' onClick={() => handleDelete(student.id)}>
                                        <CiTrash />
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>

                {edit &&
                    <div className="block" ref={editSectionRef}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3 p-5'>

                            <label htmlFor="name" className='text-xl'>Name:</label>
                            <input placeholder="Sumit..." {...register("name", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 3, message: "Min length should be 3" },
                                maxLength: { value: 15, message: "Max length should be 15" },
                            })} className='p-1 border w-96 font-medium text-lg text-slate-800' />
                            {errors.name && <div className='text-red-500 text-sm'>{errors.name.message}</div>}


                            <label htmlFor="roll" className='text-xl'>Roll:</label>
                            <input {...register("roll", {
                                required: { value: true, message: "This field is required" },
                                min: { value: 100, message: "Min length should be 100" },
                                max: { value: 200, message: "Max length should be 200" },
                            })} className='p-1 border w-96 font-medium text-lg text-slate-800' />

                            {errors.roll && <div className='text-red-500 text-sm'>{errors.roll.message}</div>}


                            <label htmlFor="city" className='text-xl'>City:</label>
                            <input {...register("city", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 3, message: "Min length should be 3" },
                                maxLength: { value: 15, message: "Max length should be 15" },
                            })} className='p-1 border w-96 font-medium text-lg text-slate-800' />

                            {errors.city && <div className='text-red-500 text-sm'>{errors.city.message}</div>}

                            <Button_black type="submit" name='Update' />
                        </form>
                    </div>
                }
            </div>




        </>
    )
}

export default DataFetch