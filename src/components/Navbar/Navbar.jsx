import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='w-full flex justify-between items-center px-36 py-1 shadow-md'>
                <div className='flex gap-6 items-center '>
                    <div>
                        <h1 className='cursor-pointer font-black text-4xl italic'>
                            <span className='text-darkGreen'>C</span>
                            <span>ivi</span>
                        </h1>
                    </div>
                    <ul className='text-dimGrayShade flex'>
                        <li className='px-3 py-4 cursor-pointer flex items-center gap-1 text-sm'><span>Home</span><i class="fa-solid fa-xs fa-angle-down" style={{ color: "#6D6D64" }}></i></li>
                        <li className='px-3 py-4 cursor-pointer flex items-center gap-1 text-sm'><span>Find jobs</span><i class="fa-solid fa-xs fa-angle-down" style={{ color: "#6D6D64" }}></i></li>
                        <li className='px-3 py-4 cursor-pointer flex items-center gap-1 text-sm'><span>Companies</span><i class="fa-solid fa-xs fa-angle-down" style={{ color: "#6D6D64" }}></i></li>
                        <li className='px-3 py-4 cursor-pointer flex items-center gap-1 text-sm'><span>Candidates</span><i class="fa-solid fa-xs fa-angle-down" style={{ color: "#6D6D64" }}></i></li>
                        <li className='px-3 py-4 cursor-pointer flex items-center gap-1 text-sm'><span>Pages</span><i class="fa-solid fa-xs fa-angle-down" style={{ color: "#6D6D64" }}></i></li>
                        <li className='px-3 py-4 cursor-pointer flex items-center gap-1 text-sm'><span>Blogs</span><i class="fa-solid fa-xs fa-angle-down" style={{ color: "#6D6D64" }}></i></li>
                    </ul>
                </div>

                <div className='flex gap-6 items-center '>
                    <div>
                        <h3 className='cursor-pointer text-dimGrayShade text-sm'>Login</h3>
                    </div>
                    <div>
                        <button className='text-white flex gap-2 items-center px-6 py-2 bg-darkGreen rounded-full border-none'>
                            <span>+</span>
                            <span>Post a job</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar