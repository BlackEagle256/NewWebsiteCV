import Image from 'next/image'

export default function Body() {
    return (
        <main className="relative w-full overflow-hidden">
            <div className="relative w-full bg-white">
                <div className="absolute inset-0 z-0">
                    <svg
                        id="wave"
                        className="rotate-180 transition duration-300"
                        viewBox="0 0 1440 490"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="translate-y-0 opacity-100"
                            fill="#F18519"
                            d="M0,294L60,310.3C120,327,240,359,360,343C480,327,600,261,720,204.2C840,147,960,98,
                            1080,73.5C1200,49,1320,49,1440,73.5C1560,98,1680,147,1800,204.2C1920,261,2040,327,
                            2160,318.5C2280,310,2400,229,2520,171.5C2640,114,2760,82,2880,89.8C3000,98,3120,147,
                            3240,212.3C3360,278,3480,359,3600,351.2C3720,343,3840,245,3960,196C4080,147,4200,147,
                            4320,147C4440,147,4560,147,4680,138.8C4800,131,4920,114,5040,138.8C5160,163,5280,229,
                            5400,277.7C5520,327,5640,359,5760,359.3C5880,359,6000,327,6120,294C6240,261,6360,229,
                            6480,196C6600,163,6720,131,6840,155.2C6960,180,7080,261,7200,285.8C7320,310,7440,278,
                            7560,253.2C7680,229,7800,212,7920,187.8C8040,163,8160,131,8280,114.3C8400,98,8520,98,
                            8580,98L8640,98L8640,490L0,490Z"
                        />
                    </svg>
                </div>

                <section className="relative z-20 px-6 pt-32 pb-[100px] max-w-xl">
                    <h2 className="text-3xl font-semibold text-white">Hello, I Am</h2>
                    <h2 className="text-3xl font-semibold text-white">Mohammad Hossein</h2>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Dadgostar Nejhad</h2>
                    <p className="text-md text-[#FCE0C5] mt-2 w-80">
                        A FrontEnd Developer with over 3 years of experience in designing and implementing modern user interfaces.
                    </p>
                </section>

                <div className="relative z-30 flex justify-end -mt-64 mb-8 px-52">
                    <div className="bg-white p-6 rounded-xl flex flex-col items-center">
                        <Image
                            src="/Prof.jpg"
                            alt="عکس محمد"
                            width={200}
                            height={200}
                            className="rounded-full border-4"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}