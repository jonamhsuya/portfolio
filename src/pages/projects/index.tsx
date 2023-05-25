import Links from "@/components/Links";
import NavigationBar from "@/components/NavigationBar";
import ProjectPane from "@/components/ProjectPane";

export default function Projects() {
  return (
    <>
      <title>Projects | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-evenly min-h-screen md:ml-[20rem] dark:bg-neutral-900 dark:text-white p-8">
        <h1 className="text-6xl text-center font-bold m-16">Projects</h1>
        <ProjectPane
          title="Greenthumb"
          description="A forum connecting gardeners with community gardens."
          skills={[
            ["Next.js", "next.png"],
            ["TypeScript", "typescript.png"],
            ["tRPC", "trpc.svg"],
            ["Prisma", "prisma.png"],
            ["Tailwind CSS", "tailwind.png"],
            ["NextAuth.js", "nextauth.png"],
          ]}
          href="https://github.com/Naman-Arora/greenthumb"
          imageSource="greenthumb.png"
        />
        <ProjectPane
          title="When"
          description="A productivity-focused app, streamlining the process of planning your day."
          skills={[
            ["React Native", "react.png"],
            ["Expo", "expo.png"],
          ]}
          href="https://github.com/jonamhsuya/when"
          imageSource="when.png"
        />
        <ProjectPane
          title="Dhaba"
          description="An app that tracks your favorite food trucks in real-time."
          skills={[
            ["React Native", "react.png"],
            ["Expo", "expo.png"],
            ["Node.js", "node.png"],
            ["MongoDB", "mongodb.svg"],
          ]}
          href="https://github.com/Naman-Arora/dhaba"
          imageSource="dhaba.png"
        />
        <ProjectPane
          title="Analysis: Which Nation Was The Best Colonizer?"
          description="A brief analysis of the impact of colonialism on former colonies' post-independence economic growth."
          skills={[
            ["Jupyter Notebook", "jupyter.png"],
            ["Pandas", "pandas.png"],
            ["Matplotlib", "matplotlib.png"],
          ]}
          href="https://medium.com/@ayushmanoj04/analysis-which-colonial-power-left-behind-the-best-legacy-11de7d5c7119"
          imageSource="colonialism.png"
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
    </>
  );
}
