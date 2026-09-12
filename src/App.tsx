import { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Reports from "./pages/Reports";

// GitHub Pages SPA fallback: public/404.html stashes the deep link in
// sessionStorage.redirect and serves index.html; pick it back up here.
function RedirectCatcher() {
  const navigate = useNavigate();
  useEffect(() => {
    const target = sessionStorage.getItem("spa-redirect");
    if (target) {
      sessionStorage.removeItem("spa-redirect");
      navigate(target, { replace: true });
    }
    // Scroll to anchor targets like /services#appdev.
    const hash = window.location.hash;
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RedirectCatcher />
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="/">
            Elementum <span>I.T.</span> Consulting
          </a>
          <nav className="site-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
      <footer className="site-footer">
        Copyright &copy; Elementum I.T. Consulting 2016&ndash;2026
        <br />
        <a href="/skills/" className="footer-subtle">
          Skills for AI Agents
        </a>
      </footer>
    </BrowserRouter>
  );
}
