import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { MdEmail } from 'react-icons/md';

export default function Header() {
    const { toggleLang, t, lang } = useContext(LanguageContext);

    return (
        <header className="bg-orangeCustom flex flex-col md:flex-row md:justify-between shadow-md px-4 sm:px-8 md:px-16 py-4 items-center gap-4">
            <h1 className="font-bold text-white text-xl sm:text-2xl" style={{ fontFamily: 'Gabriola, sans-serif' }}>
                MH : Zi Zi
            </h1>

            <div className="flex gap-4 items-center text-white text-lg">
                <a href="https://www.instagram.com/mh.fullstack.dev" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-gray-200 transition duration-200" />
                </a>
                <a href="https://www.linkedin.com/in/mh-dadgostar" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-gray-200 transition duration-200" />
                </a>
                <a href="https://t.me/blackeagle256" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="hover:text-gray-200 transition duration-200" />
                </a>
                {/* <a href="https://mhdadgostar.liara.run">
                    <TfiWorld className="hover:text-gray-200 transition duration-200" />
                </a> */}
                <a href="https://github.com/BlackEagle256" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-200 transition duration-200" />
                </a>
                <a href="mailto:mohammadhoseindadgostr@gmail.com">
                    <MdEmail className="hover:text-gray-200 transition duration-200" />
                </a>
                <a href="tel:09366606536">
                    <FaPhoneAlt className="hover:text-gray-200 transition duration-200" />
                </a>
            </div>

            <button onClick={toggleLang} className="text-white border border-gray-300 px-2 py-1 rounded hover:bg-white hover:text-orangeCustom transition">
                {lang === 'fa' ? 'EN' : 'فا'}
            </button>
        </header>
    );
}