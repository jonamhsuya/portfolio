import SectionPane from "@/components/SectionPane";
import Links from "@/components/Links";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-evenly lg:p-24 md:p-16 sm:p-8">
        <div className="m-8">
          <p className="text-3xl">Hey! I&apos;m</p>
          <p className="text-8xl font-bold">Ayush Manoj</p>
        </div>
        <div className="grid text-center lg:mb-0 lg:grid-cols-4 gap-8 lg:text-left">
          <SectionPane
            title="About Me"
            description="My background, education, hobbies, and more."
            href="/about"
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
          <SectionPane
            title="Blog"
            description="Some of my thoughts."
            href="/blog"
          />
        </div>
        <Links />
      </main>
    </>
  );
}
