import { useRouter } from "next/router";
import Link from "next/link";
export default function Sidebar({ isOpen, setSidebarOpen }) {
  const router = useRouter();
  const roadmapSubjects = [
    {
      id: 1,
      name: "Home",
      link: "/interview",
    },
    {
      id: 2,
      name: "Artifical Intelligence",
      link: "/interview/artificial-intelligence",
    },
    {
      id: 3,
      name: "CSS",
      link: "/interview/css",
    },
    {
      id: 4,
      name: "Cyber Security",
      link: "/interview/cyber-security",
    },
    {
      id: 5,
      name: "Digital Marketing",
      link: "/interview/digital-marketing",
    },
    {
      id: 6,
      name: "Ethical Hacking",
      link: "/interview/ethical-hacking",
    },
    {
      id: 7,
      name: "HTML",
      link: "/interview/html",
    },
    {
      id: 8,
      name: "Java",
      link: "/interview/java",
    },
    {
      id: 9,
      name: "JavaScript",
      link: "/interview/javascript",
    },
    {
      id: 10,
      name: "Kali Linux",
      link: "/interview/kali-linux",
    },
    {
      id: 11,
      name: "Machine Learning",
      link: "/interview/machine-learning",
    },
    {
      id: 12,
      name: "MERN Stack",
      link: "/interview/mern-stack",
    },
    {
      id: 13,
      name: "Power BI",
      link: "/interview/power-bi",
    },
    {
      id: 14,
      name: "Python",
      link: "/interview/python",
    },
    {
      id: 15,
      name: "React",
      link: "/interview/react-js",
    },
    {
      id: 16,
      name: "SQL",
      link: "/interview/sql",
    }
    // Add more subjects here
  ];
  return (
    <aside
      className={`
  bg-gray-800 dark:bg-gray-900 text-white w-64 absolute md:static h-auto z-50 transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0 overflow-y-auto
`}
    >
      <ul className="space-y-4 p-4">
        {roadmapSubjects.map((subject) => (
          <li key={subject.id}>
            <Link href={subject.link}>
              <div
                className={`sidebar-link ${router.pathname === subject.link ? "active" : ""
                  }`}
              >
                <i className="fa fa-home" />
                {subject.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
