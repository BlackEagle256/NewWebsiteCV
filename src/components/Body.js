import React from 'react';

export default function Body() {
    return (
        <main className="relative w-full overflow-hidden">
            <div className="relative bg-orangeCustom h-[700px] w-full">
                <svg
                    className="absolute right-0 top-0 h-full w-full z-10 bg-red-700"
                    viewBox="0 -20 200 300"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,105 C0,100 200,450 400,-500 L500,500 L0,500 Z"
                        fill="white"
                    />
                </svg>

                <section className="relative z-20 p-10 max-w-xl">
                    <h2 className="text-3xl font-semibold text-white">Hello, I Am</h2>
                    <h2 className="text-3xl font-semibold text-white">Mohammad Hossein</h2>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Dadgostar Nejhad</h2>
                    <p className="text-[#FCE0C5] text-md mt-2 w-80">
                        A FrontEnd Developer With over 3 years of experience in designing and implementing modern user interfaces.
                    </p>
                </section>
            </div>
        </main>
    );
}