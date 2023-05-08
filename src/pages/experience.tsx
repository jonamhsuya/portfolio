import NavigationBar from "@/components/NavigationBar";

export default function Experience() {
  return (
    <>
      <title>Experience | Ayush Manoj</title>
      <NavigationBar />
      <main className="flex flex-col items-center justify-around min-h-screen md:ml-[20rem] dark:bg-neutral-900 dark:text-white p-8">
        <h1 className="text-6xl text-center font-bold m-16">Experience</h1>
        <iframe
          className="xl:w-[70vw] lg:w-[60vw] md:w-[50vw] w-[90vw] h-[80vh] border-4 border-neutral-700"
          src="/resume.pdf"
        />
      </main>
    </>
  );
}
