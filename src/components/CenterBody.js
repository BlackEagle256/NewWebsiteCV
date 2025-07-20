export default function CenterBody() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex items-center justify-center">
      <main className="p-8 w-full max-w-5xl">
        <section className="bg-white  rounded-xl shadow-top flex overflow-hidden">
          <div className="w-2/5">
            <img
              src="Prof1.jpg"
              alt="user Avatar"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          <div className="w-3/5 p-8 flex flex-col justify-center text-left">
            <h2 className="text-2xl font-semibold">Mohammad Hosein Dadgostar Nejhad</h2>
            <p className="text-sm text-gray-600 mt-2">Front End Developer</p>

            <div className="mt-4 text-gray-500 space-y-4">
              <p>
                I am MohammadHossein Dadgostarnezhad, a frontend developer with over 3 years of experience in
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

              <p>
                During this time, I contributed to projects such as <strong>admin panel redesign</strong>,
                <strong>access-level management system</strong>, and <strong>user chat system setup</strong>. I’m
                also familiar with tools like <strong>Git</strong>, <strong>Redux</strong>, and <strong>REST APIs</strong>,
                and I’m always eager to learn new technologies.
              </p>

              <p>
                I’m passionate about UI optimization, solving technical challenges, and working with agile teams. My
                goal is to create software that’s not only beautiful but also fast and practical!
              </p>
            </div>

            <button
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full 
    hover:bg-orange-600 transition
    focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75
    active:bg-orange-700 w-max"
            >
              See More...
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}