import Link from "next/link";
import {
  IconHome,
  IconTie,
  IconSettingsCog,
  IconMessageDots,
  IconInfoCircle,
} from "@tabler/icons-react";

type Props = {
    page: string;
  };

export default function NavigationBar(props: Props) {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-evenly mt-8">
      <Link className="group grid grid-flow-col items-center gap-3" href="/">
      <p className="font-bold text-2xl transition-colors group-hover:text-gray-500">Home</p>
        <IconHome className="transition-colors duration-200 group-hover:text-gray-500" size={36} />
      </Link>
      {/* {props.page !== "about" && */}
      <Link className="group grid grid-flow-col items-center gap-3" href="/about">
        <p className="font-bold text-2xl transition-colors group-hover:text-gray-500">About Me</p>
        <IconInfoCircle className="transition-colors duration-200 group-hover:text-gray-500" size={36} />
      </Link>
      {/* } */}
      {/* {props.page !== "experience" && */}
      <Link className="group grid grid-flow-col items-center gap-3" href="/experience">
        <p className="font-bold text-2xl transition-colors group-hover:text-gray-500">Experience</p>
        <IconTie className="transition-colors duration-200 group-hover:text-gray-500" size={36} />
      </Link>
      {/* } */}
      {/* {props.page !== "projects" && */}
      <Link className="group grid grid-flow-col items-center gap-3" href="/projects">
        <p className="font-bold text-2xl transition-colors group-hover:text-gray-500">Projects</p>
        <IconSettingsCog className="transition-colors duration-200 group-hover:text-gray-500" size={36} />
      </Link>
      {/* } */}
      {/* {props.page !== "blog" && */}
      <Link className="group grid grid-flow-col items-center gap-3" href="/blog">
        <p className="font-bold text-2xl transition-colors group-hover:text-gray-500">Blog</p>
        <IconMessageDots className="transition-colors duration-200 group-hover:text-gray-500" size={36} />
      </Link>
      {/* } */}
    </div>
  );
}
