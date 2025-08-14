import ExperiencePane from "@/components/ExperiencePane";
import NavigationBar from "@/components/NavigationBar";

export default function Experience() {
  return (
    <>
      <title>Experience | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-around min-h-screen md:ml-[20rem] p-8">
        <h1 className="text-6xl text-center font-bold m-16">Experience</h1>
        <ExperiencePane
          company="MarketAxess"
          location="New York, NY"
          title="Trading Systems Intern"
          dates="June 2025 – August 2025"
          skills={[
            ["Java", "java.png"],
            ["Apache Kafka", "kafka.png"],
            ["TIBCO Rendezvous", "tibco.png"],
          ]}
          description={[
            "Designed and delivered a high-throughput, low-latency, enterprise-grade application bridging TIBCO Rendezvous with Apache Kafka, utilizing guaranteed delivery and persistent message replay for intra-day recovery of messages",
            "Engineered system to handle over 2,000 FIX messages per second and scale up to over 20 million messages per day",
            "Built a resilient hot-hot architecture with full-load capable instances for seamless, robust failover with no downtime",
            "Contributed production-ready features and bug fixes to core trading system, boosting robustness and performance",
          ]}
        />
        <ExperiencePane
          company="Visa"
          location="Austin, TX"
          title="Software Engineering Intern"
          dates="May 2024 – August 2024"
          skills={[
            ["Angular", "angular.png"],
            ["Spring Boot", "springboot.png"],
            ["PostgreSQL", "postgres.png"],
          ]}
          description={[
            "Built automated testing application with Angular, Spring Boot, and PostgreSQL, saving 100+ man-hours monthly",
            "Enhanced testing by enabling payload file uploads, reusable test cases, concurrent execution, and result tracking",
            "Integrated generative AI to automatically create test cases, optimizing workflows and accelerating testing processes",
          ]}
        />
        <ExperiencePane
          company="SmartFiit"
          location="Austin, TX"
          title="Software Engineer"
          dates="September 2023 – December 2023"
          skills={[["React Native", "react.png"]]}
          description={[
            "Spurred UI enhancement efforts and critical bug resolutions by implementing suggestions from 50+ beta testers",
            "Played a pivotal role in developing user authentication features, accelerating development timeline by several weeks",
          ]}
        />
        <ExperiencePane
          company="Intelisent"
          location="Richmond, VA"
          title="Software Development Intern"
          dates="June 2023 – August 2023"
          skills={[
            ["React", "react.png"],
            ["ASP.NET", "aspnet.png"],
            ["SQL Server", "sqlserver.png"],
          ]}
          description={[
            "Developed a web-based knowledge base application to store data for 1,000+ security policy questions from clients",
            "Utilized a React frontend and an ASP.NET Core Web API controller with an Azure-hosted SQL Server backend",
            "Significantly reduced time required by developers to locate relevant policy documents for security questionnaires",
          ]}
        />
      </main>
    </>
  );
}
