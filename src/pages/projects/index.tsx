import Links from "@/components/Links";
import NavigationBar from "@/components/NavigationBar";
import ProjectPane from "@/components/ProjectPane";

export default function Projects() {
  return (
    <>
      <title>Projects | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-evenly min-h-screen md:ml-[20rem] dark:bg-neutral-900 dark:text-white">
        <h1 className="text-6xl text-center font-bold mt-32 mb-16">Projects</h1>
        <ProjectPane
          title="Greenthumb"
          description="A forum connecting gardeners with community gardens."
          technologies="Next.js · TypeScript · Tailwind CSS · tRPC · Prisma · NextAuth.js"
          href="https://github.com/Naman-Arora/greenthumb"
          imageSource="/images/projects/greenthumb.png"
        />
        <ProjectPane
          title="When"
          description="A productivity-focused app, streamlining the process of planning your day."
          technologies="React Native · Expo"
          href="https://github.com/jonamhsuya/when"
          imageSource="/images/projects/when.png"
        />
        <ProjectPane
          title="Dhaba"
          description="An app that tracks your favorite food trucks in real-time."
          technologies="React Native · Expo · Node.js · MongoDB"
          href="https://github.com/Naman-Arora/dhaba"
          imageSource="/images/projects/dhaba.png"
        />
        <ProjectPane
          title="Analysis: Which Nation Was The Best Colonizer?"
          description="A brief analysis of the impact of colonialism on former colonies' post-independence economic growth."
          technologies="Jupyter Notebook · Pandas · Matplotlib"
          href="https://medium.com/@ayushmanoj04/analysis-which-colonial-power-left-behind-the-best-legacy-11de7d5c7119"
          imageSource="/images/projects/colonialism.png"
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
    </>
  );
}
