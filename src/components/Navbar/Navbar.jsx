import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div>

                <div className='bg-black w-full px-36 py-3 flex items-center justify-between'>
                    <ul className='flex items-center justify-center gap-8 text-sm tracking-wider font-bold'>
                        <li className='text-philippineGray flex items-center justify-center gap-2'>
                            <span><i class="fa-brands fa-twitter"></i></span>
                            <span>Twitter</span>
                        </li>
                        <li className='text-philippineGray flex items-center justify-center gap-2'>
                            <span><i class="fa-brands fa-square-facebook"></i></span>
                            <span>Facebook</span>
                        </li>
                        <li className='text-philippineGray flex items-center justify-center gap-2'>
                            <span><i class="fa-brands fa-instagram"></i></span>
                            <span>Instagram</span>
                        </li>
                        <li className='text-philippineGray flex items-center justify-center gap-2'>
                            <span><i class="fa-brands fa-youtube"></i></span>
                            <span>Youtube</span>
                        </li>
                    </ul>

                    <ul className='flex items-center justify-center gap-8 text-sm tracking-wider font-bold'>
                        <li className='text-philippineGray flex items-center justify-center gap-2'>
                            <span><i class="fa-solid fa-key"></i></span>
                            <span>Register</span>
                        </li>
                        <li className='text-philippineGray flex items-center justify-center gap-2'>
                            <span><i class="fa-solid fa-user"></i></span>
                            <span>Sign in</span>
                        </li>
                    </ul>

                </div>

                <div className='w-full flex justify-between items-center px-36 py-3 bg-mainBgLightBlue'>
                    <div className='flex gap-6 items-center '>
                        <Link to='/'>
                            <div>
                                <h1 className='cursor-pointer font-black text-4xl italic'>
                                    <span className='text-btnBlue'>Z</span>
                                    <span>uperr</span>
                                </h1>
                            </div>
                        </Link>
                        <ul className='text-dimGrayShade flex tracking-wider'>
                            <li className='px-3 py-4 cursor-pointer flex items-center gap-2 text-sm'><span>Home</span><i class="fa-solid fa-caret-down" style={{ color: "#6D6D64" }}></i></li>
                            <li className='px-3 py-4 cursor-pointer flex items-center gap-2 text-sm'><span>Find jobs</span><i class="fa-solid fa-caret-down" style={{ color: "#6D6D64" }}></i></li>
                            <li className='px-3 py-4 cursor-pointer flex items-center gap-2 text-sm'><span>Companies</span><i class="fa-solid fa-caret-down" style={{ color: "#6D6D64" }}></i></li>
                            <li className='px-3 py-4 cursor-pointer flex items-center gap-2 text-sm'><span>Candidates</span><i class="fa-solid fa-caret-down" style={{ color: "#6D6D64" }}></i></li>
                            <li className='px-3 py-4 cursor-pointer flex items-center gap-2 text-sm'><span>Pages</span><i class="fa-solid fa-caret-down" style={{ color: "#6D6D64" }}></i></li>
                            <li className='px-3 py-4 cursor-pointer flex items-center gap-2 text-sm'><span>Blogs</span><i class="fa-solid fa-caret-down" style={{ color: "#6D6D64" }}></i></li>
                        </ul>
                    </div>

                    <div className='flex gap-6 items-center '>
                        <div>
                            <h3 onClick={openModal} className='cursor-pointer text-dimGrayShade text-sm tracking-wider'>Login</h3>
                        </div>
                        <div>
                            <Link to='/post-job'>
                                <button className='text-white flex gap-2 items-center justify-center px-8 py-4 bg-btnBlue rounded-md border-none'>
                                    <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                                    <span className='font-semibold text-xs tracking-widest'>POST JOB</span>
                                </button>
                            </Link>
                        </div>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form>
                        </Modal>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar