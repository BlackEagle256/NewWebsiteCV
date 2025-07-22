import React from 'react'

export default function Header() {
    return (
        <header className="bg-orangeCustom flex justify-between shadow-md px-4 sm:px-8 md:px-16 py-4 items-center">
            <h1 className="font-bold text-white text-xl sm:text-2xl" style={{ fontFamily: 'Gabriola, sans-serif' }}>
                MH : Zi Zi
            </h1>
            <nav className="space-x-4 font-iransans hidden sm:flex">
                <a href="#" className="text-white hover:text-gray-300 sm:pr-6 md:pr-10">Home</a>
                <a href="#" className="text-white hover:text-gray-300 sm:pr-14 md:pr-28">Services</a>
            </nav>

            <button className="sm:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    )
}