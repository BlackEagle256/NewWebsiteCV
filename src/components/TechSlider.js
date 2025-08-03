import React, { useContext } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { LanguageContext } from "../context/LanguageContext";

const TechSlider = () => {
    const { t, dir } = useContext(LanguageContext);

    const techItems = [
        {
            name: "HTML5",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "Tailwind",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Material UI",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
            name: "React.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "GitLab",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        },
        {
            name: "Django",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },

    ];

    return (
        <div
            className="bg-white text-gray-800 font-sans flex flex-col items-center justify-center px-4 py-10 md:my-[-200px] lg:mb-36 lg:px-16 overflow-hidden mb-16"
            dir={dir}
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 z-20">
                {t.TechSlider.techno}
            </h2>
            <div className="w-full">
                <Swiper
                    key={dir}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    rtl={dir === "rtl"}
                    spaceBetween={16}
                    breakpoints={{
                        0: { slidesPerView: 4 },
                        480: { slidesPerView: 5 },
                        640: { slidesPerView: 5 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 6 },
                        1280: { slidesPerView: 9 },
                        1536: { slidesPerView: 10 },
                    }}
                >
                    {techItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative transition-transform hover:scale-110 duration-300">
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="mt-2 text-xs sm:text-sm text-gray-600">{item.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TechSlider;