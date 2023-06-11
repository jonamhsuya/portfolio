/* eslint-disable @next/next/no-img-element */
import Links from "@/components/Links";
import NavigationBar from "@/components/NavigationBar";

const imageSource = "/images/mountain.png";
const caption =
  "Savoring the view atop Grand Teton National Park's Inspiration Point.";

export default function About() {
  return (
    <>
      <title>About Me | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-evenly min-h-screen md:ml-[20rem] p-8 dark:bg-neutral-900 dark:text-white">
        <div className="w-80 p-10 border dark:shadow-none shadow-md rounded-md -rotate-[10deg] m-12 bg-white">
          <div className="w-60 h-60 border relative">
            <img className="object-contain" alt={caption} src={imageSource} />
          </div>
          <p className="text-center text-xs dark:text-black mt-4 py-4">
            {caption}
          </p>
        </div>
        <div className="flex flex-col gap-12 max-w-4xl my-4">
          <h1 className="text-6xl text-center font-bold">About Me</h1>
          <div>
            <h2 className="text-lg font-bold mb-2">Who are you?</h2>
            <p>
              I&apos;m an incoming junior at the University of Texas at Austin,
              studying computer science.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">What do you do?</h2>
            <ul className="list-disc list-inside">
              <li>
                I&apos;m passionate about building things with code. You can
                always find me working on my latest side project, learning a new
                tech stack or framework. The pure satisfaction I get from
                completing a project is truly unmatched.
              </li>
              <li>
                With a distinct interest in coding, mathematics, and finance, I
                aspire to work either as a quant trader or a software engineer
                after college.
              </li>
              <li>
                Currently, I&apos;m involved in Texas Convergent, an
                organization at UT where I work with a team on creating custom
                software solutions for nonprofits in the Austin area.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">What are your hobbies?</h2>
            <ul className="list-disc list-inside">
              <li>
                In my free time, I like to hit the gym, explore different genres
                of music, watch movies and party with friends, eat, and sleep.
              </li>
              <li>
                I also really enjoy traveling and always dream of exploring new
                places throughout my life.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
