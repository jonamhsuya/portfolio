import Link from "next/link";
import { IconHome, IconInfoCircle, IconSettingsCog, IconMessageDots } from "@tabler/icons-react";

export default function Experience() {
  return (
    <>
      <Link className="absolute top-8 left-8" href="/">
        <IconHome size={36} />
      </Link>
      <Link href="/about">
        <IconInfoCircle className="absolute top-8 left-24" size={36} />
      </Link>
      <Link href="/projects">
        <IconSettingsCog className="absolute top-8 left-40" size={36} />
      </Link>
      <Link href="/blog">
        <IconMessageDots className="absolute top-8 left-56" size={36} />
      </Link>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Coming soon...</h1>
      </main>
    </>
  );
}
