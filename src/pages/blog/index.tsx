import Link from "next/link";
import { IconHome, IconInfoCircle, IconTie, IconBrandGithub } from "@tabler/icons-react";

export default function Projects() {
  return (
    <>
      <Link className="absolute top-8 left-8" href="/">
        <IconHome size={36} />
      </Link>
      <Link href="/about">
        <IconInfoCircle className="absolute top-8 left-24" size={36} />
      </Link>
      <Link href="/experience">
        <IconTie className="absolute top-8 left-40" size={36} />
      </Link>
      <Link href="/projects">
        <IconBrandGithub className="absolute top-8 left-56" size={36} />
      </Link>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Coming soon...</h1>
      </main>
    </>
  );
}
