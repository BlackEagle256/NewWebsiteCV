import React from 'react'

export default function Header() {
    return (
        <header className="bg-orangeCustom flex justify-between shadow-md px-16 py-4 items-center">
            <h1 className="font-bold text-white text-2xl" style={{ fontFamily: 'Gabriola, sans-serif' }}>
                MH : Zi Zi
            </h1>
            <nav className="space-x-4 font-iransans">
                <a href="#" className="text-white hover:text-gray-300 pr-10">Home</a>
                <a href="#" className="text-white hover:text-gray-300 pr-28">Services</a>
            </nav>
        </header>
    )
}
