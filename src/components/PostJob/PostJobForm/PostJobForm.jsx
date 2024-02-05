import React from 'react'
import './PostJobForm.css'

const PostJobForm = () => {
    return (
        <div>
            <div className='flex flex-col gap-14'>

                <div className='w-full flex items-start justify-center gap-10 px-36'>
                    <div className='job_form_main w-1/2 items-start justify-start '>
                        <p className='text-sm text-btnBlue font-bold tracking-wider pb-4'>GENERAL</p>
                        <h1 className='text-black font-black text-4xl tracking-wide pb-12'>Basic Information</h1>
                        <h3 className='text-grayShade font-bold tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporeum dicant partem scripserit, doctus appetere interpretaris.
                        </h3>
                    </div>

                    <div className='w-full '>
                        <section className="bg-white">
                            <div className="">
                                <form>
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                    </div>

                                    <div className="">
                                        <textarea id="" rows="8" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="About Your Company"></textarea>
                                    </div>

                                </form>
                            </div>
                        </section>
                    </div>

                </div>

                <div className='w-full flex items-start justify-center gap-10 px-36'>
                    <div className='job_form_main w-1/2 items-start justify-start '>
                        <p className='text-sm text-btnBlue font-bold tracking-wider pb-4'>ABOUT</p>
                        <h1 className='text-black font-black text-4xl tracking-wide pb-12'>Job Information</h1>
                        <h3 className='text-grayShade font-bold tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporeum dicant partem scripserit, doctus appetere interpretaris.
                        </h3>
                    </div>

                    <div className='w-full '>
                        <section className="bg-white">
                            <div className="">
                                <form>
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                        <div className="">
                                            <input type="text" name="name" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="Your name" required="" />
                                        </div>
                                    </div>

                                    <div className="">
                                        <textarea id="" rows="8" className="bg-placeholderBg py-6 border-none text-gray-900 text-sm rounded-lg block w-full " placeholder="About Your Company"></textarea>
                                    </div>

                                </form>
                            </div>
                        </section>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PostJobForm