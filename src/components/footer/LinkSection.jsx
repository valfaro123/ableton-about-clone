import React from 'react'


export default function LinkSection() {
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <ul className='mb-2 mt-8 lg:mt-0'>
                    <a href='' className='list-item'>Register Live or Push &gt; </a>
                    <a className='list-item'>About Ableton &gt; </a>
                    <a className='list-item'>Jobs &gt; </a>
                </ul>
                <ul className='mb-8'>
                    <a>facebook</a>
                    <a>twitter</a>
                    <a>youtube</a>
                    <a>ig</a>
                </ul>
            </div>

        

            <div>
                <h3 className='list-title'>Education</h3>
                <ul className='list'>
                    <a className='list-item'>Offers for students and teachers &gt; </a>
                    <a className='list-item'>Ableton for the Classroom &gt; </a>
                    <a className='list-item'>Ableton for Colleges and Universities &gt; </a>
                </ul>
            </div>

            <div>
                <h3 className='list-title'>Community</h3>
                <ul className='list'>
                    <a className='list-item'>Find Ableton User Groups &gt; </a>
                    <a className='list-item'>Find Certefied Training &gt; </a>
                    <a className='list-item'>Become a Certified Trainer &gt; </a>
                </ul>
            </div>

            <div>
                <h3 className='list-title'>Distributors</h3>
                <ul className='list'>
                    <a className='list-item'>Find Distributors &gt; </a>
                    <a className='list-item'>Try Push in-store &gt; </a>
                </ul>
            </div>

           
        </div>
    )
}
