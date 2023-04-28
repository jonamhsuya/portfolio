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
    <div className="flex flex-row items-center justify-evenly mt-8">
      <Link href="/">
        <IconHome size={36} />
      </Link>
      {props.page !== "about" &&
      <Link href="/about">
        <IconInfoCircle size={36} />
      </Link>}
      {props.page !== "experience" &&
      <Link href="/experience">
        <IconTie size={36} />
      </Link>}
      {props.page !== "projects" &&
      <Link href="/projects">
        <IconSettingsCog size={36} />
      </Link>}
      {props.page !== "blog" &&
      <Link href="/blog">
        <IconMessageDots size={36} />
      </Link>}
    </div>
  );
}
