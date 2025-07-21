import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function CenterBody() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex items-center justify-center">
      <main className="p-8 w-full max-w-7xl">
        <section className="bg-white rounded-xl shadow-top flex overflow-hidden">
          <div className="w-2/6">
            <Image
              src="/Prof1.jpg"
              alt="user Avatar"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          <div className="w-4/6 px-14 py-12 flex flex-col justify-center text-left">
            <h2 className="text-2xl font-semibold">
              I am Mohammad Hossein Dadgostar Nezhad,
            </h2>

            <div className="mt-4 text-gray-500 space-y-4">
              <p>
                A frontend developer with over 3 years of experience in
                designing and implementing modern user interfaces. My main expertise lies in
                <strong> React.js </strong> and <strong> TypeScript </strong>, with a strong focus on building
                high-performance, user-friendly web applications.
              </p>

              <p>
                I earned my degree in <strong>Computer Engineering</strong> from the National Skills University
                (Technical & Vocational), Hamadan. From the beginning of my journey, I was passionate about
                programming and software development. I started as an intern at <strong>Nikta Andishan Royan</strong>,
                and then worked there for over a year as a frontend developer.
              </p>

              <div
                className={clsx(
                  "transition-all overflow-hidden duration-500 ease-in-out",
                  showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="space-y-4 mt-4">
                  <p>
                    During this time, I contributed to projects such as <strong>admin panel redesign</strong>, <strong>access-level management system</strong>, and <strong>user chat system setup</strong>. I’m also familiar with tools like <strong>Git</strong>, <strong>Redux</strong>, and <strong>REST APIs</strong>, and I’m always eager to learn new technologies.
                  </p>

                  <p>
                    I’m passionate about UI optimization, solving technical challenges, and working with agile teams. My goal is to create software that’s not only beautiful but also fast and practical!
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl 
                hover:bg-orange-600 transition
                focus:outline-none focus:ring-2 
                focus:ring-orange-400 focus:ring-opacity-75
                active:bg-orange-700 w-max"
            >
              {showMore ? "See Less..." : "See More..."}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}