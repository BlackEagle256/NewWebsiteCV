import { useState, useContext } from "react";
import Image from "next/image";
import clsx from "clsx";
import { LanguageContext } from "../context/LanguageContext";

export default function CenterBody() {
  const [showMore, setShowMore] = useState(false);
  const { t, dir } = useContext(LanguageContext);

  const isRtl = dir === 'rtl';

  return (
    <div
      className={clsx(
        "min-h-screen bg-white text-gray-800 font-sans flex items-center justify-center px-4 py-12 md:mt-[-100px] lg:mb-36 lg:px-16",
        isRtl ? "rtl text-right" : "ltr text-left"
      )}
    >
      <main className="w-full max-w-7xl 2xl:max-w-[1600px] mb-16 lg:mb-0">
        <section className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-2/6 h-[300px] md:h-auto">
            <Image
              src="/Prof3.png"
              alt="user Avatar"
              width={300}
              height={300}
              className="w-full h-full object-cover md:rounded-l-xl"
            />
          </div>

          <div className="w-full md:w-4/6 px-6 sm:px-10 md:px-14 lg:px-24 xl:px-32 py-8 md:py-12 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-semibold">
              {t.centerBody.title}
            </h2>

            <div className="mt-4 text-gray-600 space-y-4 text-sm sm:text-base lg:text-sm xl:text-base">
              <p>{t.centerBody.p1}</p>
              <p>{t.centerBody.p2}</p>

              <div
                className={clsx(
                  "transition-all overflow-hidden duration-500 ease-in-out",
                  showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="space-y-4 mt-4">
                  <p>{t.centerBody.p3}</p>
                  <p>{t.centerBody.p4}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl lg:px-3 lg:py-2 lg:text-sm
                hover:bg-orange-600 transition
                focus:outline-none focus:ring-2 
                focus:ring-orange-400 focus:ring-opacity-75
                active:bg-orange-700 w-max text-sm sm:text-base"
            >
              {showMore ? t.centerBody.btnLess : t.centerBody.btnMore}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
