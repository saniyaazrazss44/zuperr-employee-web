import React, { useState } from 'react'
import Modal from 'react-modal';

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
            <div className='w-full flex justify-between items-center px-36 py-1 shadow-md fixed top-0 bg-white z-40'>
                <div className='flex gap-6 items-center '>
                    <div>
                        <h1 className='cursor-pointer font-black text-4xl italic'>
                            <span className='text-darkGreen'>Z</span>
                            <span>uperr</span>
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
                        <h3 onClick={openModal} className='cursor-pointer text-dimGrayShade text-sm'>Login</h3>
                    </div>
                    <div>
                        <button className='text-white flex gap-2 items-center justify-center px-6 py-2 bg-darkGreen rounded-full border-none'>
                            <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                            <span className='font-semibold'>Post a job</span>
                        </button>
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
    )
}

export default Navbar