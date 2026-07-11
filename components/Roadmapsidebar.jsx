import { useRouter } from "next/router";
import Link from "next/link";

export default function Sidebar({ isOpen, setSidebarOpen }) {
  const router = useRouter();

  const roadmapSubjects = [
    { id: 1, name: "Home", link: "/roadmap" },
    { id: 2, name: "Backend Developer", link: "/roadmap/backend" },
    { id: 3, name: "Cyber Security", link: "/roadmap/cyber-security" },
    { id: 4, name: "Digital Marketing", link: "/roadmap/digital-marketing" },
    { id: 5, name: "Frontend Developer", link: "/roadmap/frontend" },
    { id: 6, name: "Full Stack Web Developer", link: "/roadmap/fullstack" },
    { id: 7, name: "React Developer", link: "/roadmap/react" },
  ];

  return (
    <aside
      className={`
        fixed md:sticky top-0 left-0
        h-screen w-72
        bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
        border-r border-slate-700
        shadow-2xl
        transform transition-transform duration-300 ease-in-out
        z-[90]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* Header */}
      <div className="px-6 py-6 border-b border-slate-700">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Roadmaps
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Choose your learning path
        </p>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-90px)]">
        {roadmapSubjects.map((subject) => {
          const isActive =
            router.pathname === subject.link ||
            router.asPath === subject.link;

          return (
            <Link
              key={subject.id}
              href={subject.link}
              onClick={() => setSidebarOpen(false)}
            >
              <div
                className={`
                  group
                  flex items-center
                  px-4 py-3
                  rounded-xl
                  cursor-pointer
                  transition-all
                  duration-300
                  relative
                  overflow-hidden

                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border-l-4 border-cyan-300 scale-[1.02]"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white hover:translate-x-1"
                  }
                `}
              >
                {/* Left Indicator */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-cyan-300 rounded-r-full"></span>
                )}

                <span className="font-medium tracking-wide">
                  {subject.name}
                </span>

                {/* Active Dot */}
                {isActive && (
                  <span className="ml-auto h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse"></span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}