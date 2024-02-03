import React from 'react'
import './PostJob.css'
import Navbar from '../Navbar/Navbar'

const PostJob = () => {
    return (
        <div>
            <Navbar />
            <div className='main_post w-full'>
                <div className='h-full text-white tracking-widest flex flex-col leading-10 items-center justify-center gap-8'>
                    <h1 className='font-black text-5xl'>POST A JOB</h1>
                    <h3 className='font-bold text-xl'>
                        Home - Post A Job
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PostJob