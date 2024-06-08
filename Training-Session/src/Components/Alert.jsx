import React, { useState, useEffect } from 'react'

const Alert = ({message}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])


    return (
        <>
            {visible &&(
                <div className='alert w-96 p-5 text-right bg-cyan-300 rounded-md font-semibold fixed top-0 right-0 m-10 shadow-lg'>
                    {{message}}
                </div>
            )} 


        </>
    )
}

export default Alert