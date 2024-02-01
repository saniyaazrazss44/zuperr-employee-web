import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1>
                            <span>C</span>
                            <span>ivi</span>
                        </h1>
                    </div>
                    <ul className='text-gray-500'>
                        <li><span>Home</span><i class="fa-solid fa-angle-down" style={{ color: "#000000" }}></i></li>
                        <li><span>Find jobs</span><i class="fa-solid fa-angle-down" style={{ color: "#000000" }}></i></li>
                        <li><span>Companies</span><i class="fa-solid fa-angle-down" style={{ color: "#000000" }}></i></li>
                        <li><span>Candidates</span><i class="fa-solid fa-angle-down" style={{ color: "#000000" }}></i></li>
                        <li><span>Pages</span><i class="fa-solid fa-angle-down" style={{ color: "#000000" }}></i></li>
                        <li><span>Blogs</span><i class="fa-solid fa-angle-down" style={{ color: "#000000" }}></i></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h3>Login</h3>
                    </div>
                    <div>
                        <button>
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