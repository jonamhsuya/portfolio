/* eslint-disable @next/next/no-img-element */
import NavigationBar from "@/components/NavigationBar";

const imageSource = "/images/mountain.png";
const caption =
  "Savoring the view atop Grand Teton National Park's Inspiration Point.";

export default function About() {
  return (
    <>
      <title>About | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-evenly min-h-screen md:ml-[20rem] p-8">
        <div className="w-80 p-10 border shadow-md rounded-md -rotate-[10deg] m-12 bg-white">
          <div className="w-60 h-60 border relative">
            <img className="object-contain" alt={caption} src={imageSource} />
          </div>
          <p className="text-center text-xs mt-4 py-4">{caption}</p>
        </div>
        <div className="flex flex-col gap-12 max-w-4xl my-4">
          <h1 className="text-6xl text-center font-bold">About</h1>
          <p>
            I&apos;m a senior at the University of Texas at Austin, majoring in
            Computer Science. My passion lies in building things with
            code—whether it&apos;s diving into the latest tech stack or
            framework, or tinkering on a side project, I find pure satisfaction
            in the art of creation. The blend of coding, mathematics, and
            finance fascinates me, and I aspire to channel this enthusiasm into
            a career as a quantitative developer or software engineer after college.
          </p>
          <p>
            When I&apos;m not coding or working on a project, you&apos;ll likely
            find me at the gym, exploring different genres of music, or catching
            up on movies. I love spending time with friends, whether it&apos;s a
            night out or just hanging out together. Travel is another passion of
            mine—I dream of exploring new places and cultures throughout my
            life.
          </p>
        </div>
      </main>
    </>
  );
}
