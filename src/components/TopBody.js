import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import clsx from 'clsx';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

export default function TopBody() {
    const { t, dir } = useContext(LanguageContext);
    const isRtl = dir === 'rtl';

    const stats = [
        { value: '3+', label: t.stats?.experience || 'Years Experience' },
        { value: '15+', label: t.stats?.projects || 'Projects Completed' },
        { value: '10+', label: t.stats?.technologies || 'Technologies' },
    ];

    return (
        <main className={clsx("relative min-h-screen overflow-hidden", isRtl && "rtl")} id="about">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-800" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full pt-24 pb-16">

                    {/* Text Content */}
                    <div className={clsx("space-y-8", isRtl ? "text-right" : "text-left")}>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm text-gray-300">{t.available || 'Available for work'}</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4 animate-slide-up">
                            <p className="text-gold-400 font-medium tracking-widest uppercase text-sm">
                                {t.greeting || 'Hello, I am'}
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                <span className="block">{t.name1}</span>
                                <span className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                                    {t.name2}
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-400 font-light">
                                {t.title || 'Full-Stack Developer'}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {t.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className={clsx(
                            "flex flex-wrap gap-4 animate-slide-up",
                            isRtl ? "justify-end" : "justify-start"
                        )} style={{ animationDelay: '0.4s' }}>
                            <a
                                href="/resume.pdf"
                                download
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105"
                            >
                                <FaDownload className="transition-transform group-hover:-translate-y-1" />
                                <span>{t.downloadCV || 'Download CV'}</span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-white/40"
                            >
                                <span>{t.contactMe || 'Contact Me'}</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className={clsx(
                            "flex gap-8 pt-8 border-t border-white/10 animate-slide-up",
                            isRtl && "flex-row-reverse"
                        )} style={{ animationDelay: '0.6s' }}>
                            {stats.map((stat, i) => (
                                <div key={i} className={clsx("text-center", isRtl ? "text-right" : "text-left")}>
                                    <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-blue-500/30 rounded-full blur-3xl scale-110" />

                            {/* Main Image Container */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
                                {/* Rotating Border */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/30 animate-spin" style={{ animationDuration: '30s' }} />

                                {/* Image */}
                                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <Image
                                        src="/Prof2.png"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 animate-float shadow-lg">
                                    <span className="text-3xl">💻</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gold-400 rounded-2xl flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                                    <span className="text-2xl">⚡</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/50 text-xs tracking-widest uppercase">{t.scroll || 'Scroll'}</span>
                <FaArrowDown className="text-white/50" />
            </div>
        </main>
    );
}