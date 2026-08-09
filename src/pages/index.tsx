import Links from "@/components/Links";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <title>Ayush Manoj</title>
      <main className="relative z-10 flex min-h-screen flex-col">
        <Ticker />
        <div className="a-center">
          <div className="a-shell">
            <h1 className="a-name">Ayush Manoj</h1>
            <p className="a-role">SWE @ Bloomberg</p>

            <dl className="a-fields">
              <div className="a-field">
                <dt>Role</dt>
                <dd>Software Engineer</dd>
              </div>
              <div className="a-field">
                <dt>Company</dt>
                <dd>Bloomberg</dd>
              </div>
              <div className="a-field">
                <dt>Focus</dt>
                <dd>
                  I&#39;ve followed markets obsessively for years — not as an
                  abstraction, but as a live scoreboard for the real world.
                  Building the software behind that scoreboard, where being
                  slow or wrong meaningfully changes the score, is what pulls
                  me in.
                </dd>
              </div>
            </dl>

            <p className="a-section-label">Contact functions</p>
            <Links />
          </div>
        </div>
      </main>
    </>
  );
}
