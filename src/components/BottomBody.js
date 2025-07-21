import { Box } from "@mui/material";
import React from "react";

export default function BottonBody() {
  const boxes = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      content:
        "Building responsive websites using React, Next.js, and TailwindCSS.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Apps",
      content: "Developing cross-platform mobile apps with React Native.",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Services",
      content: "Deploying scalable apps on AWS and Azure cloud platforms.",
    },
    {
      icon: "fas fa-tools",
      title: "DevOps",
      content: "Automating workflows and CI/CD pipelines.",
    },
  ];

  return (
    <Box className="w-full px-16 py-12">
      <section className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
        <Box className="flex-1 bg-white rounded-lg p-8">
          <h2 className="flex items-center text-3xl font-bold mb-8 text-gray-900">
            <i className="fas fa-briefcase mr-4 text-orange-500"></i>
            <span>Work Experience</span>
          </h2>

          <div className="relative pl-8 border-l-4 border-orange-500">
            <div className="mb-10 relative">
              <div className="absolute -left-5 top-1 w-4 h-4 bg-orange-500 rounded-full"></div>

              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                Frontend Developer
              </h3>

              <p className="text-gray-700 font-medium mb-1">
                Nikta Andishan Royan Co.
              </p>

              <p className="text-gray-500 mb-3">2023 – Present</p>

              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Developed and maintained admin panel using React and TypeScript</li>
                <li>Improved page load performance by 40%</li>
                <li>Designed user chat system with role-based access control in admin panel</li>
              </ul>
            </div>
          </div>
        </Box>

        <Box
          className="flex-1 grid grid-cols-2 gap-x-8 gap-y-12"
          sx={{ maxWidth: 650 }}
        >
          {boxes.map(({ icon, title, content }, idx) => (
            <Box
              key={idx}
              className={`bg-white rounded-xl shadow-lg p-6 flex flex-col`}
              sx={{
                transform: idx < 2 ? "translateY(-20px)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <Box
                className="text-orange-500 mb-4 flex justify-center"
                sx={{ fontSize: 40 }}
              >
                <i className={icon}></i>
              </Box>

              <h3 className="text-lg font-semibold mb-2 text-gray-900 text-left">
                {title}
              </h3>

              <p className="text-gray-600 text-left">{content}</p>
            </Box>
          ))}
        </Box>
      </section>
    </Box>
  );
}
