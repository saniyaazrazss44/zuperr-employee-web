import React from 'react'
import LogoIcon from "../../../assets/icons/rec.png"

const LatestJobs = () => {
    return (
        <div>
            <div className='w-full px-36 py-16 flex flex-col gap-12'>
                <div className='w-full flex items-start justify-between'>
                    <div>
                        <h1 className='text-3xl font-black leading-10 pb-2'>Latest Jobs</h1>
                        <p className='text-sm'>2024 jobs live - 293 added today.</p>
                    </div>
                    <div>
                        <a className='text-blue-700 underline underline-offset-4 text-sm' href="">View all jobs</a>
                    </div>
                </div>

                <div className='w-full grid grid-cols-2 gap-8 place-items-center justify-between'>

                    <div className='w-full border border-grayShade p-8 rounded-xl flex flex-col gap-10 shadow-xl'>
                        <div className='flex justify-between items-start w-full'>
                            <div className='flex gap-3 items-start'>
                                <div className=''>
                                    <img className='w-16' src={LogoIcon} alt="logo icon" />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <span>Sr. Backend Go Developer</span>
                                    <span className='text-sm'>by <span className='font-bold'>Uxper</span> in <span className='text-grayShade'>Development & IT</span></span>
                                </div>
                            </div>
                            <div className='flex gap-2.5 pt-2.5'>
                                <i className="fa-solid fa-crown fa-lg" style={{ color: "#ffd700" }}></i>
                                <i className="fa-solid fa-bolt fa-lg" style={{ color: "#ff0000" }}></i>
                                <i className="fa-regular fa-heart fa-lg" style={{ color: "#000000" }}></i>
                            </div>
                        </div>

                        <div className='flex gap-4 text-grayShade'>
                            <div className='flex gap-2 bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                <span>
                                    <i className="fa-solid fa-location-dot" style={{ color: "#6D6D64" }}></i>
                                </span>
                                <span>San Francisco</span>
                            </div>
                            <div className='bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                $100 - $200 / month
                            </div>
                        </div>

                        <div>
                            <p>
                                <span className='text-blue-600'>150</span> days left to apply
                            </p>
                        </div>
                    </div>
                    <div className='w-full border border-grayShade p-8 rounded-xl flex flex-col gap-10 shadow-xl'>
                        <div className='flex justify-between items-start w-full'>
                            <div className='flex gap-3 items-start'>
                                <div className=''>
                                    <img className='w-16' src={LogoIcon} alt="logo icon" />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <span>Sr. Backend Go Developer</span>
                                    <span className='text-sm'>by <span className='font-bold'>Uxper</span> in <span className='text-grayShade'>Development & IT</span></span>
                                </div>
                            </div>
                            <div className='flex gap-2.5 pt-2.5'>
                                <i className="fa-solid fa-crown fa-lg" style={{ color: "#ffd700" }}></i>
                                <i className="fa-solid fa-bolt fa-lg" style={{ color: "#ff0000" }}></i>
                                <i className="fa-regular fa-heart fa-lg" style={{ color: "#000000" }}></i>
                            </div>
                        </div>

                        <div className='flex gap-4 text-grayShade'>
                            <div className='flex gap-2 bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                <span>
                                    <i className="fa-solid fa-location-dot" style={{ color: "#6D6D64" }}></i>
                                </span>
                                <span>San Francisco</span>
                            </div>
                            <div className='bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                $100 - $200 / month
                            </div>
                        </div>

                        <div>
                            <p>
                                <span className='text-blue-600'>150</span> days left to apply
                            </p>
                        </div>
                    </div>

                    <div className='w-full border border-grayShade p-8 rounded-xl flex flex-col gap-10 shadow-xl'>
                        <div className='flex justify-between items-start w-full'>
                            <div className='flex gap-3 items-start'>
                                <div className=''>
                                    <img className='w-16' src={LogoIcon} alt="logo icon" />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <span>Sr. Backend Go Developer</span>
                                    <span className='text-sm'>by <span className='font-bold'>Uxper</span> in <span className='text-grayShade'>Development & IT</span></span>
                                </div>
                            </div>
                            <div className='flex gap-2.5 pt-2.5'>
                                <i className="fa-solid fa-crown fa-lg" style={{ color: "#ffd700" }}></i>
                                <i className="fa-solid fa-bolt fa-lg" style={{ color: "#ff0000" }}></i>
                                <i className="fa-regular fa-heart fa-lg" style={{ color: "#000000" }}></i>
                            </div>
                        </div>

                        <div className='flex gap-4 text-grayShade'>
                            <div className='flex gap-2 bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                <span>
                                    <i className="fa-solid fa-location-dot" style={{ color: "#6D6D64" }}></i>
                                </span>
                                <span>San Francisco</span>
                            </div>
                            <div className='bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                $100 - $200 / month
                            </div>
                        </div>

                        <div>
                            <p>
                                <span className='text-blue-600'>150</span> days left to apply
                            </p>
                        </div>
                    </div>

                    <div className='w-full border border-grayShade p-8 rounded-xl flex flex-col gap-10 shadow-xl'>
                        <div className='flex justify-between items-start w-full'>
                            <div className='flex gap-3 items-start'>
                                <div className=''>
                                    <img className='w-16' src={LogoIcon} alt="logo icon" />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <span>Sr. Backend Go Developer</span>
                                    <span className='text-sm'>by <span className='font-bold'>Uxper</span> in <span className='text-grayShade'>Development & IT</span></span>
                                </div>
                            </div>
                            <div className='flex gap-2.5 pt-2.5'>
                                <i className="fa-solid fa-crown fa-lg" style={{ color: "#ffd700" }}></i>
                                <i className="fa-solid fa-bolt fa-lg" style={{ color: "#ff0000" }}></i>
                                <i className="fa-regular fa-heart fa-lg" style={{ color: "#000000" }}></i>
                            </div>
                        </div>

                        <div className='flex gap-4 text-grayShade'>
                            <div className='flex gap-2 bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                <span>
                                    <i className="fa-solid fa-location-dot" style={{ color: "#6D6D64" }}></i>
                                </span>
                                <span>San Francisco</span>
                            </div>
                            <div className='bg-brightGray border border-dimGrayShade rounded-full px-4 py-1'>
                                $100 - $200 / month
                            </div>
                        </div>

                        <div>
                            <p>
                                <span className='text-blue-600'>150</span> days left to apply
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LatestJobs