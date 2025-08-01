import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function TopBody() {
    const { t, dir } = useContext(LanguageContext);

    const isRtl = dir === 'rtl';

    return (
        <main className="relative w-full overflow-hidden bg-white lg:mb-36">
            <div className="hidden md:block relative w-full h-[600px]">
                <div className="absolute inset-0 z-0 h-full w-full">
                    <svg
                        id="wave"
                        className={`${isRtl ? 'scale-x-[-1]' : ''} rotate-180 transition duration-300 w-full h-full object-cover`}
                        viewBox="0 0 1440 490"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
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

                <section className={` ${isRtl ? 'text-right' : 'text-left'} relative z-20 px-16 pt-28 pb-[100px] max-w-xl`}>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">{t.hello}</h2>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">{t.name1}</h2>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">{t.name2 + " " + t.finish}</h2>
                    <p className="text-lg text-[#FCE0C5] mt-2 w-80">{t.description}</p>
                </section>

                <div className={`${isRtl ? 'left-[5%]' : 'right-[5%]'} absolute z-20 bottom-0 w-[280px] md:w-[320px] lg:w-[360px] xl:w-[350px] 2xl:w-[380px] 2xl:mr-10`}>
                    <div className="relative aspect-square w-full">
                        <Image
                            src="/Prof2.png"
                            alt="Profile Image"
                            fill
                            className="rounded-full border-4 border-white object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="md:hidden flex flex-col items-center pt-12 pb-16 px-6">
                <div className="relative w-[200px] h-[200px] mb-8">
                    <Image
                        src="/Prof2.png"
                        alt="Profile Image"
                        fill
                        className="rounded-full border-4 border-orangeCustom object-cover"
                    />
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-orangeCustom mb-2">{t.hello}</h2>
                    <h2 className="text-2xl font-semibold text-orangeCustom mb-2">{t.name1}</h2>
                    <h2 className="text-2xl font-semibold text-orangeCustom mb-6">{t.name2 + " " + t.finish}</h2>
                    <p className="text-gray-600">{t.description}</p>
                </div>
            </div>
        </main>
    );
}