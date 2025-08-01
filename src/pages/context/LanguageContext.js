import { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const translations = {
    en: {
        home: 'Home',
        services: 'Services',
        hello: 'Hello, I Am',
        name1: 'Mohammad Hossein',
        name2: 'Dadgostar Nejhad',
        finish: '',
        description: 'A FrontEnd Developer with over 3 years of experience in designing and implementing modern user interfaces.',
        title: 'Home | My Website',
        centerBody: {
            title: "I am Mohammad Hossein Dadgostar Nezhad,",
            p1: `A frontend developer with over 3 years of experience in designing and implementing modern user interfaces. My main expertise lies in React.js and TypeScript, with a strong focus on building high-performance, user-friendly web applications.`,
            p2: `I earned my degree in Computer Engineering from the National Skills University (Technical & Vocational), Hamadan. From the beginning of my journey, I was passionate about programming and software development. I started as an intern at Nikta Andishan Royan, and then worked there for over a year as a frontend developer.`,
            p3: `During this time, I contributed to projects such as admin panel redesign, access-level management system, and user chat system setup. I’m also familiar with tools like Git, Redux, and REST APIs, and I’m always eager to learn new technologies.`,
            p4: `I’m passionate about UI optimization, solving technical challenges, and working with agile teams. My goal is to create software that’s not only beautiful but also fast and practical!`,
            btnMore: "See More...",
            btnLess: "See Less...",
        },
        bottomBody: {
            workExperience: "Work Experience",
            frontendDeveloper: "Frontend / Fullstack Developer",
            company: "Nikta Andishan Royan Co.",
            period: "2023 – Present",
            experienceItems: [
                "Developed admin panel using React, TypeScript, and TailwindCSS.",
                "Integrated backend services and optimized performance by 40%.",
                "Designed and implemented role-based chat system with REST APIs.",
                "Collaborated on frontend/backend integration using Django and Next.js."
            ],
            education: "Education",
            degree: "B.Sc. in Computer Engineering",
            university: "National University of Skills (Technical & Vocational), Hamadan",
            educationPeriod: "2021 – 2025",
            educationDescription: "Gained solid foundation in computer science, algorithms, software development, and practical problem-solving through academic projects and coursework.",
            skills: {
                frontend: "Frontend Development",
                frontendContent: "Experienced in building responsive and dynamic user interfaces using HTML, CSS, JavaScript, React.js, and Next.js. Skilled in TailwindCSS and Material UI for clean and modern designs.",
                backend: "Backend Development",
                backendContent: "Hands-on experience with backend development using Node.js (Express) and Django. Built scalable REST APIs with JWT authentication and database integration (MongoDB).",
                fullstack: "Fullstack Projects",
                fullstackContent: "Delivered fullstack web applications using modern stacks such as React + Node.js and Next.js + Django. Proficient in managing API communication, authentication flows, and admin panels.",
                tools: "Tools & Technologies",
                toolsContent: "Version control with Git, REST API integration, responsive design, Postman, browser debugging tools, and familiarity with Docker and CI/CD workflows."
            }
        },
        accessMe: {
            title: "Stay in touch",
            contact: "Contact",
            phone: "09366606536",
            email: "Mohammadhoseindadgostr@gmail.com",
            location: "Tehran",
            copyright: "© 2025 - All Rights Reserved"
        }

    },
    fa: {
        home: 'خانه',
        services: 'خدمات',
        hello: 'سلام، من',
        name1: 'محمد حسین',
        name2: 'دادگستر نژاد',
        finish: 'هستم',
        description: 'توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در طراحی و پیاده‌سازی رابط‌های کاربری مدرن.',
        title: 'خانه | سایت من',
        centerBody: {
            title: "من محمدحسین دادگستر نژاد هستم،",
            p1: `یک توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در طراحی و پیاده‌سازی رابط‌های کاربری مدرن. تخصص اصلی من در React.js و TypeScript است و تمرکز من بر ساخت اپلیکیشن‌های سریع و کاربرپسند است.`,
            p2: `مدرک مهندسی کامپیوتر را از دانشگاه مهارت‌های ملی (فنی و حرفه‌ای) همدان گرفتم. از ابتدا به برنامه‌نویسی و توسعه نرم‌افزار علاقه‌مند بودم. ابتدا به‌عنوان کارآموز در شرکت نیکتا اندیشان رویان فعالیت کردم و سپس بیش از یک سال به‌عنوان توسعه‌دهنده فرانت‌اند در آنجا مشغول به کار بودم.`,
            p3: `در این مدت در پروژه‌هایی مانند بازطراحی پنل ادمین، سیستم مدیریت سطح دسترسی و راه‌اندازی سیستم چت کاربران همکاری داشتم. همچنین با ابزارهایی مانند Git، Redux و APIهای REST آشنایی دارم و همیشه مشتاق یادگیری تکنولوژی‌های جدید هستم.`,
            p4: `من بهینه‌سازی رابط کاربری، حل چالش‌های فنی و کار در تیم‌های چابک را دوست دارم. هدفم ساخت نرم‌افزارهایی است که هم زیبا باشند و هم سریع و کاربردی.`,
            btnMore: "بیشتر بخوانید...",
            btnLess: "کمتر ببینید...",
        },
        bottomBody: {
            workExperience: "سوابق کاری",
            frontendDeveloper: "توسعه دهنده فرانت‌اند / فول‌استک",
            company: "شرکت نیکتا اندیشان رویان",
            period: "۱۴۰۲ – تاکنون",
            experienceItems: [
                "توسعه پنل مدیریت با استفاده از React، TypeScript و TailwindCSS",
                "ادغام سرویس‌های بک‌اند و بهینه‌سازی عملکرد به میزان ۴۰٪",
                "طراحی و پیاده‌سازی سیستم چت مبتنی بر نقش‌ها با استفاده از REST APIs",
                "همکاری در ادغام فرانت‌اند و بک‌اند با استفاده از Django و Next.js"
            ],
            education: "تحصیلات",
            degree: "کارشناسی مهندسی کامپیوتر",
            university: "دانشگاه مهارت‌های ملی (فنی و حرفه‌ای)، همدان",
            educationPeriod: "۱۴۰۰ – ۱۴۰۴",
            educationDescription: "کسب پایه قوی در علوم کامپیوتر، الگوریتم‌ها، توسعه نرم‌افزار و حل مسئله از طریق پروژه‌های دانشگاهی و دروس تخصصی.",
            skills: {
                frontend: "توسعه فرانت‌اند",
                frontendContent: "تجربه در ساخت رابط‌های کاربری واکنش‌گرا و پویا با استفاده از HTML، CSS، JavaScript، React.js و Next.js. مهارت در استفاده از TailwindCSS و Material UI برای طراحی‌های تمیز و مدرن.",
                backend: "توسعه بک‌اند",
                backendContent: "تجربه عملی در توسعه بک‌اند با استفاده از Node.js (Express) و Django. ساخت APIهای مقیاس‌پذیر با احراز هویت JWT و ادغام با پایگاه داده (MongoDB).",
                fullstack: "پروژه‌های فول‌استک",
                fullstackContent: "تحویل برنامه‌های کاربردی فول‌استک با استفاده از تکنولوژی‌های مدرن مانند React + Node.js و Next.js + Django. تسلط در مدیریت ارتباط API، جریان‌های احراز هویت و پنل‌های مدیریت.",
                tools: "ابزارها و تکنولوژی‌ها",
                toolsContent: "مدیریت نسخه با Git، ادغام REST API، طراحی واکنش‌گرا، Postman، ابزارهای دیباگ مرورگر و آشنایی با Docker و CI/CD."
            }
        },
        accessMe: {
            title: "در ارتباط باشید",
            contact: "اطلاعات تماس",
            phone: "۰۹۳۶۶۶۰۶۵۳۶",
            email: "Mohammadhoseindadgostr@gmail.com",
            location: "تهران",
            copyright: "© ۲۰۲۵ - همه حقوق محفوظ است"
        }

    }
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('fa');
    const [dir, setDir] = useState('rtl');

    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);

    const toggleLang = () => {
        const newLang = lang === 'fa' ? 'en' : 'fa';
        setLang(newLang);
        setDir(newLang === 'fa' ? 'rtl' : 'ltr');
    };

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, dir, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}