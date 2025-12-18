import React, { useContext } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { LanguageContext } from "../context/LanguageContext";
import clsx from "clsx";

const TechSlider = () => {
    const { t, dir } = useContext(LanguageContext);
    const isRtl = dir === 'rtl';

    const techCategories = [
        {
            title: "Frontend",
            items: [
                { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 85 },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 80 },
                { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 95 },
            ]
        },
        {
            title: "Backend",
            items: [
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 75 },
                { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", level: 70 },
            ]
        },
        {
            title: "Tools",
            items: [
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 90 },
                { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", level: 85 },
            ]
        }
    ];

    const allTechs = [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    ];

    return (
        <section id="skills" className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white" dir={dir}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 text-sm font-medium rounded-full mb-4">
                        {t.skills?.badge || 'My Skills'}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                        {t.TechSlider?.techno || 'Technologies I Work With'}
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        {t.skills?.desc || 'Here are the technologies and tools I use to bring ideas to life'}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {techCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 hover:shadow-elegant transition-all duration-500"
                        >
                            <h3 className={clsx(
                                "text-xl font-bold text-navy-900 mb-6 pb-4 border-b border-gray-100",
                                isRtl ? "text-right" : "text-left"
                            )}>
                                {category.title}
                            </h3>
                            <div className="space-y-5">
                                {category.items.map((tech, i) => (
                                    <div key={i} className="group">
                                        <div className={clsx("flex items-center gap-3 mb-2", isRtl && "flex-row-reverse")}>
                                            <div className="w-8 h-8 relative flex-shrink-0">
                                                <Image
                                                    src={tech.logo}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <span className="font-medium text-gray-700 flex-1">{tech.name}</span>
                                            <span className="text-sm text-gray-400">{tech.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${tech.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Infinite Scroll Slider */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <Swiper
                        key={dir}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        rtl={isRtl}
                        spaceBetween={24}
                        breakpoints={{
                            0: { slidesPerView: 4 },
                            640: { slidesPerView: 5 },
                            768: { slidesPerView: 6 },
                            1024: { slidesPerView: 8 },
                            1280: { slidesPerView: 10 },
                        }}
                    >
                        {allTechs.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group flex flex-col items-center justify-center py-4">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-3 group-hover:shadow-card group-hover:border-gold-200 transition-all duration-300 group-hover:scale-110">
                                        <Image
                                            src={item.logo}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <span className="mt-3 text-xs text-gray-400 group-hover:text-navy-900 transition-colors duration-300">
                                        {item.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TechSlider;