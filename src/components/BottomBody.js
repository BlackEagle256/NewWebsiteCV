import { Box } from "@mui/material";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function BottonBody() {
  const boxes = [
    {
      icon: "fas fa-code",
      title: "Frontend Development",
      content:
        "Experienced in building responsive and dynamic user interfaces using HTML, CSS, JavaScript, React.js, and Next.js. Skilled in TailwindCSS and Material UI for clean and modern designs.",
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      content:
        "Hands-on experience with backend development using Node.js (Express) and Django. Built scalable REST APIs with JWT authentication and database integration (MongoDB).",
    },
    {
      icon: "fas fa-project-diagram",
      title: "Fullstack Projects",
      content:
        "Delivered fullstack web applications using modern stacks such as React + Node.js and Next.js + Django. Proficient in managing API communication, authentication flows, and admin panels.",
    },
    {
      icon: "fas fa-cogs",
      title: "Tools & Technologies",
      content:
        "Version control with Git, REST API integration, responsive design, Postman, browser debugging tools, and familiarity with Docker and CI/CD workflows.",
    },
  ];

  return (
    <Box className="w-full px-4 sm:px-8 lg:px-16 py-12 mt-[-50px]">
      <section className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto items-center">
        <Box className="flex-1 bg-white rounded-lg p-8">
          <h2 className="flex items-center text-3xl font-bold mb-8 text-gray-900">
            <i className="fas fa-briefcase mr-4 text-orange-500"></i>
            <span>Work Experience</span>
          </h2>

          <div className="relative pl-8 border-l-4 border-orange-500">
            <div className="mb-10 relative">
              <div className="absolute -left-5 top-1 w-4 h-4 bg-orange-500 rounded-full"></div>

              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                Frontend / Fullstack Developer
              </h3>

              <p className="text-gray-700 font-medium mb-1">
                Nikta Andishan Royan Co.
              </p>

              <p className="text-gray-500 mb-3">2023 – Present</p>

              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Developed admin panel using React, TypeScript, and TailwindCSS.</li>
                <li>Integrated backend services and optimized performance by 40%.</li>
                <li>Designed and implemented role-based chat system with REST APIs.</li>
                <li>Collaborated on frontend/backend integration using Django and Next.js.</li>
              </ul>
            </div>
          </div>
        </Box>

        <Box
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
          sx={{ maxWidth: 700 }}
        >
          {boxes.map(({ icon, title, content }, idx) => (
            <Box
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col transition-all hover:shadow-xl"
              sx={{
                transform: idx < 2 ? "translateY(-20px)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <Box
                className="text-orange-500 mb-4 flex justify-start"
                sx={{ fontSize: 36 }}
              >
                <i className={icon}></i>
              </Box>

              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {title}
              </h3>

              <p className="text-sm text-gray-600">{content}</p>
            </Box>
          ))}
        </Box>
      </section>
    </Box>
  );
}
