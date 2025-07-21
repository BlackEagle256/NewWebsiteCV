import React from "react";

export default function AccessMe() {
    return (
        <footer className="bg-orangeCustom text-white px-16 py-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-8">

                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-10 text-white text-center">Stay in touch</h3>
                    <div className="flex space-x-6">
                        <a
                            href="https://www.instagram.com/mh.fullstack.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black rounded-md p-3 hover:bg-gray-200 transition"
                            style={{ borderRadius: "6px" }}
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mh-dadgostar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black rounded-md p-3 hover:bg-gray-200 transition"
                            style={{ borderRadius: "6px" }}
                        >
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>

                        <a
                            href="https://t.me/blackeagle256"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black rounded-md p-3 hover:bg-gray-200 transition"
                            style={{ borderRadius: "6px" }}
                        >
                            <i className="fab fa-telegram-plane text-xl"></i>
                        </a>

                        <a
                            href="https://github.com/BlackEagle256"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black rounded-md p-3 hover:bg-gray-200 transition"
                            style={{ borderRadius: "6px" }}
                        >
                            <i className="fab fa-github text-xl"></i>
                        </a>

                        <a
                            href="mailto:mohammadhoseindadgostr@gmail.com"
                            className="bg-white text-black rounded-md p-3 hover:bg-gray-200 transition"
                            style={{ borderRadius: "6px" }}
                        >
                            <i className="fas fa-envelope text-xl"></i>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 text-left min-w-[300px]">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <p>09366606536</p>
                    <p>mohammadhoseindadgostr@gmail.com</p>
                    <p>تهران</p>
                </div>
            </div>
            <p class="text-center mt-10">
                <span class="en-lang">© 2025 - All Rights Reserved</span>
            </p>
        </footer>
    );
}
