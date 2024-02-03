import React from 'react'
import './Main.css'
// import Office from '../../assets/images/main_image.png'
import Freelance from '../../assets/images/freelance-girl.png'
import Square from '../../assets/icons/icons8-square-48.png'
import Notion from '../../assets/icons/icons8-notion-48.png'
import Github from '../../assets/icons/icons8-github-48.png'

const Main = () => {
  return (
    <div>
      <div className='pt-4 h-screen w-full bg-mainBgLightBlue px-36 pb-24 flex items-center'>
        <div className='w-full flex justify-between items-center'>
          <div className='w-full flex flex-col gap-24'>
            <div className='w-full flex flex-col gap-6'>
              <div className='w-full'>
                <h1 className='flex flex-col text-3xl font-extrabold leading-10'>
                  <span>Got Talent ?</span>
                  <span>Meet Opportunity</span>
                </h1>
              </div>

              <div className='text-sm'>
                <p>Company reviews, Salaries, Interviews, Jobs</p>
              </div>

              <div className='w-full flex items-center relative z-0'>

                <div className='absolute pl-4 flex items-center'>
                  <i className="fa-solid fa-magnifying-glass" style={{ color: "#6D6D64" }}></i>
                </div>

                <input type="search" placeholder='Job title or keywords' className='pl-12 rounded-full h-16 w-full border-none' />

                <div className='flex absolute w-full pr-4 items-center justify-end'>
                  <span><i className="fa-solid fa-location-dot" style={{ color: "#6D6D64" }}></i></span>
                  <span className='pl-2'>All Location</span>
                  <div className='pl-6'>
                    <button className='bg-btnBlue text-white px-8 py-3 text-sm rounded-full'>Search</button>
                  </div>
                </div>

              </div>

              <div>
                <p className='flex flex-col text-sm leading-7'>
                  <span>Popular Searches :</span>
                  <span className='font-bold'>Data Management, Marketing Manager, Customer Support</span>
                </p>
              </div>
            </div>

            <div className='w-full flex flex-col gap-4'>
              <div>Trusted by leading brands and startups</div>
              <div>
                <ul className='flex justify-start items-center gap-4'>
                  <li className='flex items-center gap-1'><img className='w-7' src={Square} alt="square" /><span>Square</span></li>
                  <li className='flex items-center gap-1'><img className='w-7' src={Notion} alt="notion" /><span>Notion</span></li>
                  <li className='flex items-center gap-1'><img className='w-7' src={Github} alt="github" /><span>Github</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-full relative flex items-center justify-center'>
            <div className='w-96 h-96 bg-white overflow-hidden rounded-full flex items-center justify-center'>
              <img className='absolute lg:w-1/2 xl:w-2/3' src={Freelance} alt="office-culture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main