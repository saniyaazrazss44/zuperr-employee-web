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
      <div className='h-screen w-full bg-brightGray px-36 flex items-center pb-10'>
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

              <div>

                <form>
                  <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title or Keywords" required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-darkGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 ">Search</button>
                  </div>
                </form>

              </div>

              <div>
                <p className='flex flex-col text-sm'>
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

          <div className='w-full h-2/5'>
            <img className='w-96' src={Freelance} alt="office-culture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main