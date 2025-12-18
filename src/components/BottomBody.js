import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import clsx from "clsx";
import { FaBriefcase, FaGraduationCap, FaCode, FaServer, FaProjectDiagram, FaCogs } from "react-icons/fa";

export default function BottomBody() {
  const { t, dir } = useContext(LanguageContext);
  const isRtl = dir === 'rtl';

  const skillCards = [
    {
      icon: FaCode,
      title: t.bottomBody.skills.frontend,
      content: t.bottomBody.skills.frontendContent,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaServer,
      title: t.bottomBody.skills.backend,
      content: t.bottomBody.skills.backendContent,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaProjectDiagram,
      title: t.bottomBody.skills.fullstack,
      content: t.bottomBody.skills.fullstackContent,
      gradient: "from-gold-400 to-orange-500",
    },
    {
      icon: FaCogs,
      title: t.bottomBody.skills.tools,
      content: t.bottomBody.skills.toolsContent,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12" dir={dir}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-navy-900/5 text-navy-900 text-sm font-medium rounded-full mb-4">
            {t.experience?.badge || 'My Journey'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.experience?.title || 'Experience & Education'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left Column - Timeline */}
          <div className="space-y-16">

            {/* Work Experience */}
            <div>
              <div className={clsx(
                "flex items-center gap-4 mb-10",
                isRtl && "flex-row-reverse"
              )}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-glow">
                  <FaBriefcase className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">{t.bottomBody.workExperience}</h3>
              </div>

              <div className={clsx(
                "relative",
                isRtl ? "pr-8 border-r-2 border-gray-200" : "pl-8 border-l-2 border-gray-200"
              )}>
                {/* Timeline Item */}
                <div className="relative pb-8">
                  {/* Dot */}
                  <div className={clsx(
                    "absolute top-2 w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-md",
                    isRtl ? "-right-[9px]" : "-left-[9px]"
                  )} />

                  <div className={clsx(
                    "bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-elegant transition-shadow duration-300",
                    isRtl ? "text-right" : "text-left"
                  )}>
                    <div className={clsx("flex items-start justify-between gap-4 mb-4", isRtl && "flex-row-reverse")}>
                      <div>
                        <h4 className="text-lg font-bold text-navy-900">{t.bottomBody.frontendDeveloper}</h4>
                        <p className="text-gold-500 font-medium">{t.bottomBody.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-gold-50 text-gold-600 text-xs font-medium rounded-full whitespace-nowrap">
                        {t.bottomBody.period}
                      </span>
                    </div>

                    <ul className={clsx(
                      "space-y-2 text-gray-600 text-sm",
                      isRtl ? "list-none" : "list-disc list-inside"
                    )}>
                      {t.bottomBody.experienceItems.map((item, index) => (
                        <li key={index} className={clsx("flex items-start gap-2", isRtl && "flex-row-reverse")}>
                          <span className="text-gold-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className={clsx(
                "flex items-center gap-4 mb-10",
                isRtl && "flex-row-reverse"
              )}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">{t.bottomBody.education}</h3>
              </div>

              <div className={clsx(
                "relative",
                isRtl ? "pr-8 border-r-2 border-gray-200" : "pl-8 border-l-2 border-gray-200"
              )}>
                <div className="relative pb-8">
                  <div className={clsx(
                    "absolute top-2 w-4 h-4 rounded-full bg-navy-900 border-4 border-white shadow-md",
                    isRtl ? "-right-[9px]" : "-left-[9px]"
                  )} />

                  <div className={clsx(
                    "bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-elegant transition-shadow duration-300",
                    isRtl ? "text-right" : "text-left"
                  )}>
                    <div className={clsx("flex items-start justify-between gap-4 mb-4", isRtl && "flex-row-reverse")}>
                      <div>
                        <h4 className="text-lg font-bold text-navy-900">{t.bottomBody.degree}</h4>
                        <p className="text-navy-600 font-medium">{t.bottomBody.university}</p>
                      </div>
                      <span className="px-3 py-1 bg-navy-50 text-navy-600 text-xs font-medium rounded-full whitespace-nowrap">
                        {t.bottomBody.educationPeriod}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{t.bottomBody.educationDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skill Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCards.map((card, idx) => (
              <div
                key={idx}
                className={clsx(
                  "group relative overflow-hidden bg-white rounded-3xl p-6 shadow-card border border-gray-100 hover:shadow-elegant transition-all duration-500",
                  idx % 2 === 1 && "sm:translate-y-8",
                  isRtl ? "text-right" : "text-left"
                )}
              >
                {/* Background Gradient on Hover */}
                <div className={clsx(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                  card.gradient
                )} />

                {/* Icon */}
                <div className={clsx(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-300",
                  card.gradient
                )}>
                  <card.icon className="text-2xl" />
                </div>

                <h4 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                  {card.title}
                </h4>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.content}
                </p>

                {/* Arrow Icon */}
                <div className={clsx(
                  "absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300",
                  isRtl ? "left-6 group-hover:-translate-x-2" : "right-6 group-hover:translate-x-2"
                )}>
                  <span className="text-2xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}