import Link from "next/link";
import {
  IconHome,
  IconInfoCircle,
  IconTools,
  IconTie,
  IconCode,
} from "@tabler/icons-react";
import Links from "./Links";

export default function NavigationBar() {
  return (
    <div className="flex flex-col justify-between min-w-[20vw] p-8 min-h-screen fixed bg-gray-100 dark:bg-black">
      <div>
        <Link
          className="group flex items-center gap-4 mb-6 dark:text-white"
          href="/"
        >
          <IconHome
            className="transition-colors duration-200 group-hover:text-gray-500"
            size={24}
          />
          <p className="font-bold text-xl transition-colors group-hover:text-gray-500">
            Home
          </p>
        </Link>
        <Link
          className="group flex items-center gap-4 mb-6 dark:text-white"
          href="/about"
        >
          <IconInfoCircle
            className="transition-colors duration-200 group-hover:text-gray-500"
            size={24}
          />
          <p className="font-bold text-xl transition-colors group-hover:text-gray-500">
            About Me
          </p>
        </Link>
        <Link
          className="group flex items-center gap-4 mb-6 dark:text-white"
          href="/skills"
        >
          <IconTools
            className="transition-colors duration-200 group-hover:text-gray-500"
            size={24}
          />
          <p className="font-bold text-xl transition-colors group-hover:text-gray-500">
            Skills
          </p>
        </Link>
        <Link
          className="group flex items-center gap-4 mb-6 dark:text-white"
          href="/experience"
        >
          <IconTie
            className="transition-colors duration-200 group-hover:text-gray-500"
            size={24}
          />
          <p className="font-bold text-xl transition-colors group-hover:text-gray-500">
            Experience
          </p>
        </Link>
        <Link
          className="group flex items-center gap-4 dark:text-white"
          href="/projects"
        >
          <IconCode
            className="transition-colors duration-200 group-hover:text-gray-500"
            size={24}
          />
          <p className="font-bold text-xl transition-colors group-hover:text-gray-500">
            Projects
          </p>
        </Link>
      </div>
      <Links />
    </div>
  );
}
