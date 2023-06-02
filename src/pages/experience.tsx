import ExperiencePane from "@/components/ExperiencePane";
import NavigationBar from "@/components/NavigationBar";

export default function Experience() {
  return (
    <>
      <title>Experience | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-around min-h-screen md:ml-[20rem] dark:bg-neutral-900 dark:text-white p-8">
        <h1 className="text-6xl text-center font-bold m-16">Experience</h1>
        <ExperiencePane
          company="Intelisent"
          location="Richmond, VA"
          title="Marketing Intern"
          dates="June 2023 – August 2023 (Incoming)"
          skills={[]}
          description={[]}
        />
        <ExperiencePane
          company="Texas Convergent"
          location="Austin, TX"
          title="Forge Engineer, QWELL"
          dates="January 2023 – Present"
          skills={[
            ["React Native", "react.png"],
            ["Expo", "expo.png"],
            ["Supabase", "supabase.png"],
            ["PostgreSQL", "postgres.png"],
          ]}
          description={[
            "Building a mobile application for a nonprofit to connect Austin’s LGBTQ community with LGBTQ-affirming businesses",
            "Scraped data from 1,000+ Instagram accounts of businesses with Python, Jupyter Notebook, and Instaloader API",
            "Spearheaded development of map screen to display nearby businesses using Google Maps and Expo Location APIs",
          ]}
        />
        <ExperiencePane
          company="Mr. Jan's Math Class"
          location="Sugar Land, TX"
          title="Tutor"
          dates="August 2021 – May 2022"
          skills={[]}
          description={[
            "Taught math and science concepts ranging from pre-algebra to college-level calculus and physics to 50+ students",
            "Assisted students with homework and test preparation twice a week in small-group sessions of a few students each",
          ]}
        />
        <ExperiencePane
          company="Morgan Stanley"
          location="New York, NY"
          title="JumpStart Scholar"
          dates="November 2021 – April 2022"
          skills={[]}
          description={[
            "Selected as one of 160 scholars out of 1,000+ initial applicants to study entrepreneurship and investment banking",
            "Placed first in end-of-program case competition and featured on Morgan Stanley billboard in Times Square after selecting the best set of co-managers and passive bookrunners for Amazon’s $18.5bn investment-grade debt offering",
          ]}
        />
        <ExperiencePane
          company="Cisco"
          location="Raleigh, NC"
          title="Extern"
          dates="June 2021 – July 2021"
          skills={[]}
          description={[
            "Selected as one of 150 externs out of 650+ initial applicants after both an initial application and interview process",
            "Designed an IoT-integrated mobile app for nursing homes, winning first place in end-of-program capstone project",
          ]}
        />
      </main>
    </>
  );
}
