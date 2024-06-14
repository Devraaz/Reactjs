import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import Pagination from './Pagination'

const Homepage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/assets/');
                setData(response.data.data); // Assuming response.data is an array
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 1000); // Fetch data every second

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        setCurrentPage(1)
    }

    const filteredData = data.filter(item =>
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const lastPost = currentPage * postPerPage
    const firstPost = lastPost - postPerPage
    const currentPost = filteredData.slice(firstPost, lastPost)




    return (
        <>
            <section className='bg-slate-200 w-[98vw] min-h-[900px] mx-auto my-2 rounded-md py-4'>
                <h1 className='text-slate-900 text-center text-3xl font-semibold uppercase '>Real Time Crypto Currency</h1>

                <div className='flex justify-center my-4'>
                    <input type="text" value={searchQuery} onChange={handleSearch} placeholder='Search Coins ' className='p-1 text-lg font-semibold rounded-md w-96 ring ring-cyan-400 outline:ring-blue-400 mx-auto' />
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>

                    {currentPost.map(item => (
                        <Card key={item.id} coins={item} />
                    ))}
                    
                </div>
                <Pagination totalPost={filteredData.length}
                        postPerPage={postPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage = {currentPage}
                    />
            </section>
        </>
    )
}

export default Homepage