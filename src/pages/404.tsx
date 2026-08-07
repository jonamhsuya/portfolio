import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DEFAULT_PATH = "/this-page";

export default function NotFound() {
  const router = useRouter();
  const [path, setPath] = useState(DEFAULT_PATH);

  useEffect(() => {
    const requestedPath = router.asPath.split("?")[0].split("#")[0];
    if (requestedPath && requestedPath !== "/404") {
      setPath(requestedPath);
    }
  }, [router.asPath]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <>
      <title>404 | Ayush Manoj</title>
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 p-12 text-center">
        <div className="font-mono text-left text-sm text-muted">
          <p>
            <span className="text-accent">$</span> cd {path}
          </p>
          <p>bash: cd: {path}: No such file or directory</p>
        </div>
        <p className="font-bold text-8xl md:text-9xl text-foreground">404</p>
        <p className="-mt-4 text-2xl text-muted">page not found</p>
        <Link
          href="/"
          className="mono-label mt-4 rounded transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          press{" "}
          <kbd className="border border-border rounded px-1.5 py-0.5 bg-surface text-foreground normal-case">
            Enter
          </kbd>{" "}
          to return home
        </Link>
      </main>
    </>
  );
}
