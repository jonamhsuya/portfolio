import SectionPane from "@/components/SectionPane";
import Links from "@/components/Links";

export default function Home() {
  return (
    <>
      <title>Home | Ayush Manoj</title>
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-12 dark:bg-neutral-900 dark:text-white">
        <div>
          <p className="text-2xl text-center">Hey! I&apos;m</p>
          <p className="font-bold text-8xl text-center">Ayush Manoj</p>
        </div>
        <div className="m-8 text-center">
          <p className="font-bold text-2xl">CS @ UT Austin</p>
          <p className="text-lg">
            Currently interested in mobile and web development, data analysis,
            and machine learning.
          </p>
        </div>
        <div className="grid text-center lg:mb-0 lg:grid-cols-4 gap-8">
          <SectionPane
            title="About Me"
            description="My background, education, hobbies, and more."
            href="/about"
          />
          <SectionPane
            title="Skills"
            description="Languages, frameworks, tools, and libraries I'm experienced with."
            href="/skills"
          />
          <SectionPane
            title="Experience"
            description="Previous jobs, internships, and programs I've participated in."
            href="/experience"
          />
          <SectionPane
            title="Projects"
            description="Cool stuff I've enjoyed tinkering with over the years."
            href="/projects"
          />
        </div>
        <Links />
      </main>
    </>
  );
}
