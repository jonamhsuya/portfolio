import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Links from "@/components/Links";
import MarketStatus from "@/components/MarketStatus";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const NAME = "Ayush Manoj";

export default function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <title>Ayush Manoj</title>
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 p-12 text-center">
        <motion.div
          className="relative z-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {prefersReducedMotion ? (
            <p className="font-bold text-6xl md:text-7xl lg:text-8xl">
              {NAME}
            </p>
          ) : (
            <TypeAnimation
              wrapper="p"
              className="name-typed font-bold text-6xl md:text-7xl lg:text-8xl"
              speed={{ type: "keyStrokeDelayInMs", value: 130 }}
              sequence={[NAME, 2200, (el) => el?.classList.add("done")]}
              repeat={0}
              cursor
            />
          )}
        </motion.div>
        <motion.div
          className="relative z-10 max-w-xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <p className="font-bold text-3xl mb-4">SWE @ Bloomberg</p>
          <p className="text-xl text-muted">
            I&#39;ve followed markets obsessively for years—not as an
            abstraction, but as a live scoreboard for the real world.
            Building the software behind that scoreboard, where being slow
            or wrong meaningfully changes the score, is what pulls me in.
          </p>
        </motion.div>
        <motion.div
          className="relative z-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.65 }}
        >
          <Links />
        </motion.div>
        <motion.div
          className="relative z-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <MarketStatus />
        </motion.div>
      </main>
    </>
  );
}
