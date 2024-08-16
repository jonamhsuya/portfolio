import { Menu, Transition } from "@headlessui/react";
import {
  IconCode,
  IconHome,
  IconInfoCircle,
  IconMenu2,
  IconTie,
  IconTools,
} from "@tabler/icons-react";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <div className="block md:hidden absolute m-8 z-50">
      <Menu>
        <div className="flex items-center justify-center rounded-full w-12 h-12 transition-colors duration-200 hover:bg-gray-100">
          <Menu.Button>
            <IconMenu2 />
          </Menu.Button>
        </div>
        <Transition
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className={"w-60 border rounded-lg shadow-lg bg-white"}>
            <Menu.Item>
              <Link
                className="group flex items-center gap-4 px-6 pt-8 pb-4 rounded-t-lg"
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
            </Menu.Item>
            <Menu.Item>
              <Link
                className="group flex items-center gap-4 px-6 p-4"
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
            </Menu.Item>
            <Menu.Item>
              <Link
                className="group flex items-center gap-4 px-6 p-4"
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
            </Menu.Item>
            <Menu.Item>
              <Link
                className="group flex items-center gap-4 px-6 p-4"
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
            </Menu.Item>
            <Menu.Item>
              <Link
                className="group flex items-center gap-4 px-6 pt-4 pb-8 rounded-b-lg"
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
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
