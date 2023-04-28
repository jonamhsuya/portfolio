import Image from "next/image";
import Link from "next/link";
import { IconHome, IconTie, IconSettingsCog, IconMessageDots } from "@tabler/icons-react";

const route = "/images/profile.png";
const caption = "Taking in Austin's skyline on the Congress Avenue Bridge.";

export default function About() {
  return (
    <>
      <Link className="absolute top-8 left-8" href="/">
        <IconHome size={36} />
      </Link>
      <Link href="/experience">
        <IconTie className="absolute top-8 left-24" size={36} />
      </Link>
      <Link href="/projects">
        <IconSettingsCog className="absolute top-8 left-40" size={36} />
      </Link>
      <Link href="/blog">
        <IconMessageDots className="absolute top-8 left-56" size={36} />
      </Link>
      <main className="flex min-h-screen xl:flex-row flex-col items-center justify-evenly p-8">
        <div className="w-80 p-10 border border-gray-300 shadow-md rounded-lg -rotate-12">
          <div className="rounded-full w-60 h-60 border relative">
            <Image
              className="rounded-lg"
              alt={caption}
              src={route}
              fill={true}
            />
          </div>
          <p className="text-center text-xs mt-4">{caption}</p>
        </div>
        <div className="max-w-4xl">
          <h1 className="text-6xl text-center md:text-left font-bold mb-6">
            About Me
          </h1>
          <p>
            I&apos;m an incoming junior at the University of Texas at Austin.
          </p>
          <p>
            I&apos;m currently a computer science major but aspire to declare a
            second major in either math or finance.
          </p>
          <p>
            In my free time, I like to hit the gym, listen to all sorts of
            music, watch movies and party with friends, eat, and sleep.
          </p>
        </div>
      </main>
    </>
  );
}
