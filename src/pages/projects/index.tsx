import Links from "@/components/Links";
import NavigationBar from "@/components/NavigationBar";
import ProjectPane from "@/components/ProjectPane";

export default function Projects() {
  return (
    <>
      <title>Projects | Ayush Manoj</title>
      <NavigationBar page="projects" />
      <main className="flex min-h-[90vh] flex-col items-center justify-center">
        <h1 className="text-6xl text-center font-bold mt-20 mb-10">Projects</h1>
        <ProjectPane
          title="Greenthumb"
          description="A web application that allows people in an area to find community gardens and interact with other like-minded people."
          href="/projects/greenthumb"
          imageSource="/images/greenthumb.png"
          imageCaption=""
        />
        <ProjectPane
          title="When"
          description="A productivity-focused app, streamlining the process of planning your day."
          href="/projects/when"
          imageSource="/images/when.png"
          imageCaption=""
        />
        <ProjectPane
          title="Dhaba"
          description="A mobile app that tracks your favorite food trucks in real-time."
          href="/projects/dhaba"
          imageSource="/images/dhaba.png"
          imageCaption=""
        />
        <ProjectPane
          title="Analysis: Which Nation Was The Best Colonizer?"
          description="A brief analysis of the impact of colonialism on post-independence economic growth."
          href="/projects/colonialism"
          imageSource="/images/colonialism.png"
          imageCaption=""
        />
        <Links />
      </main>
    </>
  );
}
