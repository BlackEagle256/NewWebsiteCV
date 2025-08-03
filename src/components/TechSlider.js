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
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
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
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "GitLab",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        },
        {
            name: "Tailwind",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "Material UI",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
            name: "Django",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
    ];

    return (
        <div
            className="bg-white text-gray-800 font-sans flex items-center justify-center px-4 py-10 md:my-[-200px] lg:mb-36 lg:px-16 overflow-hidden"
            dir={dir}
        >
            <h2 className="text-xl font-bold text-gray-800 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
                {t.TechSlider.techno}
            </h2>
            <Swiper
                key={dir}
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={10}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={2000}
                rtl={dir === "rtl"}
            >
                {techItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="mt-2 text-sm text-gray-600">{item.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TechSlider;