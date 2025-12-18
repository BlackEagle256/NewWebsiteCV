import { useState, useContext } from "react";
import Image from "next/image";
import clsx from "clsx";
import { LanguageContext } from "../context/LanguageContext";
import { FaQuoteLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CenterBody() {
  const [showMore, setShowMore] = useState(false);
  const { t, dir } = useContext(LanguageContext);
  const isRtl = dir === 'rtl';

  return (
    <section
      id="about-detail"
      className={clsx(
        "py-24 lg:py-32 px-4 sm:px-8 lg:px-12",
        isRtl && "rtl"
      )}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-navy-900/5 text-navy-900 text-sm font-medium rounded-full mb-4">
            {t.aboutMe?.badge || 'About Me'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.aboutMe?.title || 'Know Me Better'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Image Side */}
          <div className="lg:col-span-2 relative">
            <div className="relative group">
              {/* Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

              {/* Image Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-elegant">
                <Image
                  src="/Prof3.png"
                  alt="Profile"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Quote */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/90 to-transparent">
                  <FaQuoteLeft className="text-gold-400 mb-2" size={24} />
                  <p className="text-white text-sm italic">
                    {t.quote || "Code is poetry written in logic"}
                  </p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-6 border border-gray-100">
                <p className="text-4xl font-bold text-navy-900">3+</p>
                <p className="text-sm text-gray-500">{t.yearsExp || 'Years of Experience'}</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={clsx("lg:col-span-3 space-y-8", isRtl ? "text-right" : "text-left")}>

            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-relaxed">
              {t.centerBody.title}
            </h3>

            {/* Main Text */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>{t.centerBody.p1}</p>
              <p>{t.centerBody.p2}</p>

              {/* Expandable Content */}
              <div className={clsx(
                "overflow-hidden transition-all duration-700 ease-in-out",
                showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <p>{t.centerBody.p3}</p>
                  <p>{t.centerBody.p4}</p>
                </div>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="group inline-flex items-center gap-2 text-navy-900 font-medium hover:text-gold-500 transition-colors duration-300"
            >
              <span>{showMore ? t.centerBody.btnLess : t.centerBody.btnMore}</span>
              {showMore ? (
                <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
              ) : (
                <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}