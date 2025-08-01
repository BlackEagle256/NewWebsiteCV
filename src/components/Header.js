import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Header() {
    const { toggleLang, t, lang } = useContext(LanguageContext);

    return (
        <header className="bg-orangeCustom flex justify-between shadow-md px-4 sm:px-8 md:px-16 py-4 items-center">
            <h1 className="font-bold text-white text-xl sm:text-2xl" style={{ fontFamily: 'Gabriola, sans-serif' }}>
                MH : Zi Zi
            </h1>
            {/* <nav className="space-x-4 font-iransans hidden sm:flex">
                <a href="#" className="text-white hover:text-gray-300 sm:pr-6 md:pr-10">{t.home}</a>
                <a href="#" className="text-white hover:text-gray-300 sm:pr-14 md:pr-28">{t.services}</a>
            </nav> */}

            <button onClick={toggleLang} className="text-white border border-gray-300 px-2 py-1 rounded">
                {lang === 'fa' ? 'EN' : 'فا'}
            </button>
        </header>
    )
}