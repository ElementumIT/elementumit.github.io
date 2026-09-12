import { useState } from "react";

export default function Services() {
  const [tellMore, setTellMore] = useState(false);

  return (
    <div className="prose">
      <div className="disclaimer">
        <h2>Disclaimer: Sorry, I cannot offer fixed-bid project work</h2>
        <p>
          Why can&apos;t I offer fixed-bid project work? I am happy to answer that question in
          excruciating detail to anyone who will listen. But no one ever does. Usually it&apos;s
          best for both sides to just understand I won&apos;t do fixed-bids.
        </p>
        <p>
          <button className="linklike" onClick={() => setTellMore(true)}>
            I&apos;ll listen, tell me more...
          </button>
        </p>
        {tellMore && (
          <p>
            Fixed-bid work has lots of overhead. I am a one-man shop. No project managers, no
            lawyers. Nobody to write lengthy proposals nobody will read and contracts that
            can&apos;t be enforced. Those people cost money. Most of them cost more than
            programmers do. They deserve to be well compensated because that stuff is difficult
            and boring. I think it ends up cheaper to skip all that. Tell me what you need and
            let&apos;s get started. If it&apos;s not going well, fire me. All work I do is yours
            from the first minute I start billing.
          </p>
        )}
      </div>

      <h2 id="appdev">Web Application Development</h2>
      <ul>
        <li>For new development projects, my preferred tools for development would be:</li>
        <ul>
          <li>React for the front end</li>
          <li>.NET Core + HotChocolate GraphQL for the server side logic and DAL</li>
          <li>SQL Server or MySQL for the database</li>
        </ul>
        <li>
          I&apos;ve been doing web development since 2001, so I have lots of experience with all
          kinds of different architectures
        </li>
        <ul>
          <li>.NET MVC</li>
          <li>.NET Webforms</li>
          <li>Developing &amp; consuming REST APIs</li>
          <li>Lots of Javascript and older Javascript frameworks like JQuery</li>
          <li>Developing add-ins for CMS applications like WordPress, Joomla and Sitefinity</li>
        </ul>
        <li>I&apos;ve worked the most with Microsoft technologies, but I can also help out with some others</li>
        <ul>
          <li>Python</li>
          <li>Node.js</li>
          <li>PHP</li>
        </ul>
      </ul>

      <h2 id="db">Database Design &amp; Development</h2>
      <p>
        I began my career in I.T. as a Database Programmer &amp; Administrator, so I have a solid
        background in database design and development. I feel like that&apos;s a strong foundation
        for development. An application built on a poorly designed database eventually becomes a
        mess.
      </p>
      <ul>
        <li>I am an expert with SQL, which is the query language shared by all relational databases</li>
        <li>
          Anyone who knows SQL can develop pretty well on top of any of the major relational
          databases, but here are my comfort levels with each of the databases I&apos;ve worked with
        </li>
        <ul>
          <li>Microsoft SQL Server - Expert level</li>
          <li>MySQL - Plenty of experience developing on it, but not an expert</li>
          <li>Oracle - I can get by, but it&apos;s been years since I&apos;ve worked with it heavily</li>
          <li>All the rest - If it&apos;s relational and uses SQL as its query language, I&apos;ll be ok.</li>
        </ul>
      </ul>

      <h2 id="advising">Hosting &amp; Cloud Advising</h2>
      <p>
        Services like Squarespace, Wix, Wordpress.com and others make building a professional
        looking website easy. But then they charge you $150 to $600 per year, forever, for doing
        nothing.
      </p>
      <p>
        The big advantage to these services is they make it easy to update your content yourself,
        with no programmer involved. So, if your site is updated often, even 3 or 4 times a year,
        it probably makes sense to go with one of these services. Otherwise, you may want to
        consider moving to a free hosting, or very very cheaply hosted model ($50 a year). I can
        help you determine if that would be a good fit.
      </p>
      <p>
        This site is being hosted for $12 a year. That&apos;s what I pay to keep the domain name
        &quot;elementumit.com&quot; registered.
      </p>
    </div>
  );
}
