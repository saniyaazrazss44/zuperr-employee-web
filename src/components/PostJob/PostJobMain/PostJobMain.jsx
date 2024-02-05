import React from 'react'
import PostJobForm from '../PostJobForm/PostJobForm'

const PostJobMain = () => {
    return (
        <div>
            <div className='py-24'>
                <div className='w-full flex flex-col items-center justify-center leading-10 gap-2'>
                    <p className='text-sm text-btnBlue font-bold tracking-wider'>LET’S FIND OUT</p>
                    <h1 className='text-black font-black text-5xl tracking-wider'>How It Works</h1>
                    <h3 className='text-grayShade font-bold tracking-wider'>
                        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum
                    </h3>
                </div>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <PostJobForm />

        </div>
    )
}

export default PostJobMain