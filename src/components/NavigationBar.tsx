import Link from "next/link";
import {
  IconHome,
  IconInfoCircle,
  IconTools,
  IconTie,
  IconCode,
  IconMenu2,
} from "@tabler/icons-react";
import Links from "./Links";
import { useState } from "react";

export default function NavigationBar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <button
        className="block md:hidden p-3 m-8 rounded-full absolute transition-colors duration-200 hover:bg-gray-100"
        onClick={() => {
          let newState = !displayMenu;
          setDisplayMenu(newState);
        }}
      >
        <IconMenu2 />
      </button>
      {displayMenu && (
        <div className="block md:hidden absolute mx-12 my-20 z-10 border rounded-lg shadow-lg bg-white">
          <Link
            className="group flex items-center gap-4 p-4 border w-56 dark:text-white"
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
            className="group flex items-center gap-4 p-4 border w-56 dark:text-white"
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
            className="group flex items-center gap-4 p-4 border w-56 dark:text-white"
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
            className="group flex items-center gap-4 p-4 border w-56 dark:text-white"
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
            className="group flex items-center gap-4 p-4 border w-56 dark:text-white"
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
      )}
      <div className="hidden md:flex flex-col justify-between min-w-[20rem] p-8 min-h-screen fixed bg-gray-100 dark:bg-black">
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
    </>
  );
}
