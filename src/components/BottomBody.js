import { Box } from "@mui/material";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import clsx from "clsx";

export default function BottonBody() {
  const { t, dir } = useContext(LanguageContext);
  const isRtl = dir === 'rtl';

  const boxes = [
    {
      icon: "fas fa-code",
      title: t.bottomBody.skills.frontend,
      content: t.bottomBody.skills.frontendContent,
    },
    {
      icon: "fas fa-server",
      title: t.bottomBody.skills.backend,
      content: t.bottomBody.skills.backendContent,
    },
    {
      icon: "fas fa-project-diagram",
      title: t.bottomBody.skills.fullstack,
      content: t.bottomBody.skills.fullstackContent,
    },
    {
      icon: "fas fa-cogs",
      title: t.bottomBody.skills.tools,
      content: t.bottomBody.skills.toolsContent,
    },
  ];

  return (
    <Box className={clsx("w-full px-4 sm:px-8 lg:px-20 lg:py-0 py-12 mt-[-100px] lg:mt-[-120px] lg:mb-[120px]", isRtl ? "rtl" : "ltr")}>
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-8 max-w-7xl mx-auto items-start">
        {/* Experience & Education */}
        <Box className="flex-1 bg-white rounded-lg p-6 lg:p-4">
          {/* Work Experience */}
          <h2 className="flex items-center text-2xl lg:text-xl font-bold mb-6 text-gray-900">
            <i className="fas fa-briefcase mr-4 text-orange-500"></i>
            <span>{t.bottomBody.workExperience}</span>
          </h2>

          <div className="relative pl-6 border-l-4 border-orange-500">
            <div className="mb-10 relative">
              <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-500 rounded-full">
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-[3px] left-[3px]"></div>
              </div>

              <h3 className={clsx(
                "font-semibold mb-2 text-gray-800",
                isRtl ? "text-xl leading-relaxed" : "text-lg lg:text-base"
              )}>
                {t.bottomBody.frontendDeveloper}
              </h3>

              <p className={clsx(
                "mb-1 text-gray-700",
                isRtl ? "text-base" : "text-sm"
              )}>
                {t.bottomBody.company}
              </p>

              <p className={clsx(
                "mb-4 text-gray-500",
                isRtl ? "text-base" : "text-sm"
              )}>
                {t.bottomBody.period}
              </p>

              <ul className={clsx(
                "list-disc list-inside text-gray-600",
                isRtl ? "space-y-2 text-sm leading-relaxed" : "space-y-1 text-sm lg:text-xs",
              )}>
                {t.bottomBody.experienceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12 lg:mt-16">
            <h2 className="flex items-center text-2xl lg:text-xl font-bold mb-6 text-gray-900">
              <i className="fas fa-graduation-cap mr-4 text-orange-500"></i>
              <span>{t.bottomBody.education}</span>
            </h2>

            <div className="relative pl-6 border-l-4 border-orange-500">
              <div className="mb-10 relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-500 rounded-full">
                  <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-[3px] left-[3px]"></div>
                </div>

                <h3 className={clsx(
                  "font-semibold mb-2 text-gray-800",
                  isRtl ? "text-xl leading-relaxed" : "text-lg lg:text-base"
                )}>
                  {t.bottomBody.degree}
                </h3>

                <p className={clsx(
                  "mb-1 text-gray-700",
                  isRtl ? "text-base" : "text-sm"
                )}>
                  {t.bottomBody.university}
                </p>

                <p className={clsx(
                  "mb-4 text-gray-500",
                  isRtl ? "text-sm" : "text-xs"
                )}>
                  {t.bottomBody.educationPeriod}
                </p>

                <p className={clsx(
                  "text-gray-600",
                  isRtl ? "text-sm leading-relaxed" : "text-sm lg:text-xs"
                )}>
                  {t.bottomBody.educationDescription}
                </p>
              </div>
            </div>
          </div>
        </Box>

        {/* Skills & Tech Stack Boxes */}
        <Box
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 lg:gap-6"
          sx={{ maxWidth: 700 }}
        >
          {boxes.map(({ icon, title, content }, idx) => (
            <Box
              key={idx}
              className={clsx(
                "bg-white rounded-xl shadow-md p-6 flex flex-col transition-all hover:shadow-lg",
                isRtl ? "text-right" : "text-left"
              )}
              sx={{
                transform: {
                  xs: "translateY(0)",
                  lg: (idx === 0 || idx === 2) ? "translateY(0)" : "translateY(30px)",
                },
                transition: "transform 0.3s ease",
                lineHeight: 1.7,
              }}
            >
              <Box
                className="text-orange-500 mb-3 flex"
                sx={{ fontSize: 30, justifyContent: isRtl ? "flex-end" : "flex-start" }}
              >
                <i className={icon}></i>
              </Box>

              <h3
                className={clsx(
                  "font-semibold mb-3",
                  isRtl ? "text-base leading-relaxed" : "text-sm lg:text-sm"
                )}
              >
                {title}
              </h3>

              <p
                className={clsx(
                  "text-gray-600",
                  isRtl ? "text-sm leading-relaxed" : "text-sm lg:text-xs"
                )}
              >
                {content}
              </p>
            </Box>
          ))}
        </Box>
      </section>
    </Box>
  );
}
