import React from 'react'

const Pagination = ({ totalPost, postPerPage, setCurrentPage,currentPage }) => {

    let pages = []
    for (let i = 1; Math.ceil(i <= totalPost / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
            
            <p className='font-semibold text-lg text-center w-screen'>{currentPage}/{pages.length}</p>
            <div className='w-screen flex flex-row justify-center my-5'>
                {pages.map((page, index) => (
                    <button key={index} onClick={(e) => setCurrentPage(page)} className='p-2 bg-slate-900 text-white w-12 mx-auto rounded-md'>{page}</button>
                ))}
                
            </div>
        </>
    )
}

export default Pagination