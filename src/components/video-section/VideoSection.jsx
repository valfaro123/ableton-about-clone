import React from 'react'
import videoThumbnail from '../../images/poster-juanpe.jpg'

export default function VideoSection() {
    return (
        <div className='mx-8 md:mx-48 mt-9'>
            <img src={videoThumbnail}/>
            <p className='my-2  text-xs font-semibold'>Why Ableton - Juanpe Bolivar</p>
        </div>
    )
}
