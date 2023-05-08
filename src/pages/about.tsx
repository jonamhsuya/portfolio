import Image from "next/image";
import Links from "@/components/Links";
import NavigationBar from "@/components/NavigationBar";

const imageSource = "/images/about/profile.png";
const caption = "Taking in Austin's skyline on the Congress Avenue Bridge.";

export default function About() {
  return (
    <>
      <title>About Me | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-evenly min-h-screen md:ml-[20rem] p-8 dark:bg-neutral-900 dark:text-white">
        <div className="w-80 p-10 border dark:shadow-none shadow-md rounded-md -rotate-[10deg] m-12 bg-white">
          <div className="w-60 h-60 border rounded-lg relative">
            <Image
              className="rounded-lg"
              alt={caption}
              src={imageSource}
              fill={true}
            />
          </div>
          <p className="text-center text-xs dark:text-black mt-4">{caption}</p>
        </div>
        <div className="max-w-4xl mx-8">
          <h1 className="text-6xl text-center font-bold mb-6">
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
