import NavigationBar from "@/components/NavigationBar";
import SkillPane from "@/components/SkillPane";

export default function Skills() {
  return (
    <>
      <title>Skills | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-evenly min-h-screen md:ml-[20rem] px-4 py-8">
        <h1 className="text-6xl text-center font-bold mt-16 mb-8">Skills</h1>
        <div className="flex flex-col m-12 items-center">
          <h2 className="text-2xl text-center font-bold mb-6">Languages</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SkillPane
              name="Python"
              imageSource="/images/skills/python.png"
              link="https://www.python.org/"
            />
            <SkillPane
              name="Java"
              imageSource="/images/skills/java.png"
              link="https://www.java.com/en/"
            />
            <SkillPane
              name="JavaScript"
              imageSource="/images/skills/javascript.png"
              link="https://www.javascript.com/"
            />
            <SkillPane
              name="TypeScript"
              imageSource="/images/skills/typescript.png"
              link="https://www.typescriptlang.org/"
            />
            <SkillPane
              name="HTML"
              imageSource="/images/skills/html.png"
              link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            />
            <SkillPane
              name="CSS"
              imageSource="/images/skills/css.png"
              link="https://developer.mozilla.org/en-US/docs/Web/CSS"
            />
            <SkillPane
              name="C#"
              imageSource="/images/skills/csharp.png"
              link="https://learn.microsoft.com/en-us/dotnet/csharp"
            />
            <SkillPane
              name="SQL"
              imageSource="/images/skills/sql.png"
              link="https://en.wikipedia.org/wiki/SQL"
            />
            <SkillPane
              name="C"
              imageSource="/images/skills/c.png"
              link="https://en.wikipedia.org/wiki/C_(programming_language)"
            />
            <SkillPane
              name="C++"
              imageSource="/images/skills/cpp.png"
              link="hhttps://en.wikipedia.org/wiki/C%2B%2B"
            />
          </div>
        </div>
        <div className="m-12">
          <h2 className="text-2xl text-center font-bold mb-6">Frameworks</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SkillPane
              name="React"
              imageSource="/images/skills/react.png"
              link="https://react.dev/"
            />
            <SkillPane
              name="React Native"
              imageSource="/images/skills/react.png"
              link="https://reactnative.dev/"
            />
            <SkillPane
              name="Next.js"
              imageSource="/images/skills/next.png"
              link="https://nextjs.org/"
            />
            <SkillPane
              name="Angular"
              imageSource="/images/skills/angular.png"
              link="https://angular.dev/"
            />
            <SkillPane
              name="Node.js"
              imageSource="/images/skills/node.png"
              link="https://nodejs.org/en"
            />
            <SkillPane
              name="Tailwind CSS"
              imageSource="/images/skills/tailwind.png"
              link="https://tailwindcss.com/"
            />
            <SkillPane
              name="ASP.NET"
              imageSource="/images/skills/aspnet.png"
              link="https://dotnet.microsoft.com/en-us/apps/aspnet"
            />
            <SkillPane
              name="Spring Boot"
              imageSource="/images/skills/springboot.png"
              link="https://spring.io/projects/spring-boot"
            />
          </div>
        </div>
        <div className="m-12">
          <h2 className="text-2xl text-center font-bold mb-6">Backend</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SkillPane
              name="SQL Server"
              imageSource="/images/skills/sqlserver.png"
              link="https://www.postgresql.org/"
            />
            <SkillPane
              name="Apache Kafka"
              imageSource="/images/skills/kafka.png"
              link="https://kafka.apache.org/"
            />
            <SkillPane
              name="TIBCO Rendezvous"
              imageSource="/images/skills/tibco.png"
              link="https://docs.tibco.com/products/tibco-rendezvous"
            />
            <SkillPane
              name="PostgreSQL"
              imageSource="/images/skills/postgres.png"
              link="https://www.postgresql.org/"
            />
            <SkillPane
              name="MongoDB"
              imageSource="/images/skills/mongodb.svg"
              link="https://www.mongodb.com/"
            />
            <SkillPane
              name="Supabase"
              imageSource="/images/skills/supabase.png"
              link="https://supabase.com/"
            />
            <SkillPane
              name="Prisma"
              imageSource="/images/skills/prisma.png"
              link="https://www.prisma.io/"
            />
            <SkillPane
              name="Heroku"
              imageSource="/images/skills/heroku.webp"
              link="https://www.heroku.com/"
            />
          </div>
        </div>
        <div className="m-12">
          <h2 className="text-2xl text-center font-bold mb-6">Libraries</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SkillPane
              name="NumPy"
              imageSource="/images/skills/numpy.png"
              link="https://numpy.org/"
            />
            <SkillPane
              name="pandas"
              imageSource="/images/skills/pandas.png"
              link="https://pandas.pydata.org/"
            />
            <SkillPane
              name="Matplotlib"
              imageSource="/images/skills/matplotlib.png"
              link="https://matplotlib.org/"
            />
            <SkillPane
              name="scikit-learn"
              imageSource="/images/skills/scikit-learn.png"
              link="https://scikit-learn.org/stable/"
            />
            <SkillPane
              name="SQLAlchemy"
              imageSource="/images/skills/sqlalchemy.png"
              link="https://www.sqlalchemy.org/"
            />
          </div>
        </div>
        <div className="m-12">
          <h2 className="text-2xl text-center font-bold mb-6">Tools</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SkillPane
              name="Expo"
              imageSource="/images/skills/expo.png"
              link="https://expo.dev/"
            />
            <SkillPane
              name="Jupyter Notebook"
              imageSource="/images/skills/jupyter.png"
              link="https://jupyter.org/"
            />
            <SkillPane
              name="Retool"
              imageSource="/images/skills/retool.png"
              link="https://retool.com/"
            />
          </div>
        </div>
      </main>
    </>
  );
}
