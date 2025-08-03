import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function AccessMe() {
    const { t } = useContext(LanguageContext);

    return (
        <footer className="bg-orangeCustom text-white px-4 sm:px-8 md:px-12 lg:px-16 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                    <h3 className="text-xl font-bold mb-6 text-white text-center items-center justify-center mx-auto md:text-left">
                        {t.accessMe.title}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="https://www.instagram.com/mh.fullstack.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 hover:bg-gray-200 transition rounded-md"
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mh-dadgostar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 hover:bg-gray-200 transition rounded-md"
                        >
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a
                            href="https://mhdadgostar.liara.run"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 hover:bg-gray-200 transition rounded-md"
                        >
                            <i className="fas fa-globe text-xl"></i>
                        </a>
                        <a
                            href="https://t.me/blackeagle256"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 hover:bg-gray-200 transition rounded-md"
                        >
                            <i className="fab fa-telegram-plane text-xl"></i>
                        </a>
                        <a
                            href="https://github.com/BlackEagle256"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 hover:bg-gray-200 transition rounded-md"
                        >
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a
                            href="mailto:mohammadhoseindadgostr@gmail.com"
                            className="bg-white text-black p-3 hover:bg-gray-200 transition rounded-md"
                        >
                            <i className="fas fa-envelope text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col space-y-3 text-center md:text-left w-full md:w-auto">
                    <h3 className="text-xl font-bold mb-2">{t.accessMe.contact}</h3>
                    <a href={`tel:${t.accessMe.phone}`}>{t.accessMe.phone}</a>
                    <a href={`mailto:${t.accessMe.email}`}>{t.accessMe.email}</a>
                    <p>{t.accessMe.location}</p>
                </div>
            </div>

            {/* Footer Note */}
            <p className="text-center mt-14 text-sm md:text-base">
                {t.accessMe.copyright}
            </p>

            <p className="copyright text-center mt-4 text-sm md:text-base">
                Special Thanks With <i className="fas fa-heart "></i> to Zi Zi for the beautiful UI Design
            </p>
        </footer>
    );
}
