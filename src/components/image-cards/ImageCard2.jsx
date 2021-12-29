import React from 'react';
import photo3 from '../../images/photo-3.jpg'
import photo4 from '../../images/photo-4.jpg'
import photo5 from '../../images/photo-5.jpg'

export default function ImageCard2() {
    return (
        <div className='h-full relative flex mt-8 overflow-hidden mb-12' >
            <div className='flex flex-col w-1/2 py-8'>
                <img className='object-contain h-2/5 ml-8 mb-8' src={photo3}/>
                <img className='object-contain h-2/5  ml-8 ' src={photo4}/>
            </div>
            <img className='object-cover absolute right-0 h-1/2 w-2/5 my-24 mx-8' src={photo5}/>
            <div className='left-0 h-full w-3/5 absolute bg-color-block-2 -z-1 '></div>

        </div>
    )
}
