import React from 'react'

export default function Header() {
    return (
        <header className="bg-orangeCustom flex justify-between shadow-md px-6 py-4 items-center">
            <h1 className="font-bold text-white text-2xl" style={{ fontFamily: 'Gabriola, sans-serif' }}>
                MH : Zi Zi
            </h1>
            <nav className="space-x-4 font-iransans">
                <a href="#" className="text-white hover:text-blue-500 pr-10">Home</a>
                <a href="#" className="text-white hover:text-blue-500 pr-10">About Us</a>
                <a href="#" className="text-white hover:text-blue-500 pr-20">Contact Us</a>
            </nav>
        </header>
    )
}
