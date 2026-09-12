export default function Home() {
  return (
    <>
      <section className="hero">
        <img src="hero.jpg" alt="Elementum I.T. Consulting" />
        <div>
          <h1>Elementum I.T. Consulting</h1>
          <p>20+ years experience providing custom web and database development to small business.</p>
          <a className="btn" href="/contact">
            Get in touch
          </a>
        </div>
      </section>
      <section className="cards">
        <div className="card">
          <h2>Web Application Development</h2>
          <p>
            Specializing in .NET Core and modern front-end development. But by now I&apos;ve worked
            with almost everything.
          </p>
          <a className="btn" href="/services#appdev">
            More Info
          </a>
        </div>
        <div className="card">
          <h2>Database Design &amp; Development</h2>
          <p>Experienced in Microsoft SQL Server (both on-premise &amp; Azure), Oracle, MySQL.</p>
          <a className="btn" href="/services#db">
            More Info
          </a>
        </div>
        <div className="card">
          <h2>Hosting &amp; Cloud Advising</h2>
          <p>
            Paying too much for hosting? Simple sites can run free; database-backed sites for a few
            bucks a month.
          </p>
          <a className="btn" href="/services#advising">
            More Info
          </a>
        </div>
      </section>
    </>
  );
}
