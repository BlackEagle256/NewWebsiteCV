import React from "react";
import Image from "next/image";

const TechSlider = () => {
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

    const duplicatedItems = [...techItems, ...techItems];

    return (
        <div className="bg-white text-gray-800 font-sans flex items-center justify-center px-4 py-12 md:mt-[-100px] lg:mb-36 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
                    تکنولوژی‌های مورد استفاده
                </h2>
            </div>

            <div className="animate-slide flex">
                {duplicatedItems.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        className="flex-shrink-0 mx-8 flex flex-col items-center"
                    >
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
                ))}
            </div>

            <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
        </div>
    );
};

export default TechSlider;