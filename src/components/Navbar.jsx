const links = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Experience", "#experience"]
];

function Navbar() {
  return (
    <header className="nav">
      <nav className="nav-inner container" aria-label="Main">
        <a href="#home" className="logo">
          Muhammad Nabi
          <small>Web-App-Entwickler</small>
        </a>

        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a href="#contact" className="btn primary nav-cta">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
