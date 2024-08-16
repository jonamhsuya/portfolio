import {
  IconCode,
  IconHome,
  IconInfoCircle,
  IconTie,
  IconTools
} from "@tabler/icons-react";
import Link from "next/link";
import Links from "./Links";
import NavigationMenu from "./NavigationMenu";

export default function NavigationBar() {
  return (
    <>
      <NavigationMenu />
      <div className="hidden md:flex flex-col justify-between min-w-[20rem] p-8 min-h-screen fixed bg-gray-100">
        <div>
          <Link
            className="group flex items-center gap-4 mb-6"
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
            className="group flex items-center gap-4 mb-6"
            href="/about"
          >
            <IconInfoCircle
              className="transition-colors duration-200 group-hover:text-gray-500"
              size={24}
            />
            <p className="font-bold text-xl transition-colors group-hover:text-gray-500">
              About
            </p>
          </Link>
          <Link
            className="group flex items-center gap-4 mb-6"
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
            className="group flex items-center gap-4 mb-6"
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
            className="group flex items-center gap-4"
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
    </>
  );
}
