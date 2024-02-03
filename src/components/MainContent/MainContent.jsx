import React from 'react'
import Employer from '../../assets/images/employer-vector-art.png'
import Candidate from '../../assets/images/candidate-vector-art.png'
import LatestJobs from './LatestJobs/LatestJobs'

const MainContent = () => {
    return (
        <div>
            <div>
                <div className='grid grid-cols-2 bg-cardBg gap-8 place-items-center justify-between px-36 py-16'>
                    <div className='bg-cardColor p-8 rounded-xl flex items-center justify-center'>
                        <div className='w-1/2 flex flex-col gap-10'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-black text-2xl'>
                                    For Employers
                                </h1>
                                <p className='text-sm font-semibold'>Find professionals from around the world and across all skills.</p>
                            </div>
                            <div className=''>
                                <button className='bg-btnBlue rounded-full font-bold px-6 py-2 text-white'>Post jobs for free</button>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img className='w-full' src={Employer} alt="employer" />
                        </div>
                    </div>

                    <div className='bg-cardColor p-8 rounded-xl flex items-center justify-center'>
                        <div className='w-1/2 flex flex-col gap-10'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-black text-2xl'>
                                    For Candidate
                                </h1>
                                <p className='text-sm font-semibold'>Build your professional profile, find new job opportunities.</p>
                            </div>
                            <div className=''>
                                <button className='bg-btnBlue rounded-full font-bold px-6 py-2 text-white'>Upload your CV</button>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img className='w-full' src={Candidate} alt="candidate" />
                        </div>
                    </div>
                </div>

                <LatestJobs />
                
            </div>
        </div>
    )
}

export default MainContent