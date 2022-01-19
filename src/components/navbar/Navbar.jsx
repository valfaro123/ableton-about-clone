import React,{ useState } from 'react'
import logo from '../../images/svg/logo.svg';

export default function Navbar() {
    const [navIsOpened, setNavIsOpened] = useState(false);

    return (
        <div className='w-full'>
            <div className='flex pb-1 md:justify-between border-b-2'>
                <div className='flex ml-10'>
                    <div className='flex z-10'>
                        <img src={logo}/>
                        <span onClick={()=> setNavIsOpened(!navIsOpened)} className='flex mt-5 mx-8 lg:hidden'>Menu {navIsOpened? <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M11 7l-4 6h8z" fill="currentColor"/></svg>
                        : <svg className='inline' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M15 8l-4.03 6L7 8h8z" fill="currentColor"/></svg>}
                        </span>
                        
                    </div>
                    {/* custom class not being added on lg breakpointr */}
                    <div className={navIsOpened? 'nav opened-nav lg:flex-row lg:bg-transparent lg:static lg:p-0 lg:text-xl lg:space-x-9 lg:m-5 lg:visible' : 'nav unopened-nav lg:flex-row lg:bg-transparent lg:static lg:p-0 lg:text-xl lg:space-x-9 lg:visible lg:m-5' }>
                        <a>Live</a>
                        <a>Push</a>
                        <a>Link</a>
                        <a>Shop</a>
                        <a>Packs</a>
                        <a>Help</a>
                        <a className='text-theme'>More+</a>
                    </div>
                </div>
                <div className='hidden lg:flex mt-5 mr-7 text-lg space-x-10'>
                    <a className='text-selected-text font-semibold'>Try live for free</a>
                    <a className='text-sm font-semibold mt-1' >Log in or register</a>
                </div>
            </div>
            <div className='font-semibold ml-10 mt-5 text-xs lg:text-base flex space-x-5'>
                <a className='text-theme'>About</a>
                <a>Jobs</a>
                <a>Apprenticeship</a>
            </div>
        </div>
    )
}
