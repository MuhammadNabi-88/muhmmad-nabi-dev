import { profile } from "../data/projects";

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="container contact-inner">
        <div>
          <h2>Let's build something together</h2>
          <p>
            Based in Metzingen, Germany, and open to suitable IT roles.
            The fastest way to reach me is email.
          </p>
        </div>

        <ul className="contact-links">
          <li><a href={`mailto:${profile.email}`}><span>Email</span>{profile.email}</a></li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>github.com/MuhammadNabi-88
            </a>
          </li>
          {profile.linkedin && (
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>Muhammad Nabi
              </a>
            </li>
          )}
        </ul>
      </div>

      <p className="container footer-note">
        © {new Date().getFullYear()} Muhammad Nabi. Built with React and Vite.
      </p>
    </footer>
  );
}

export default Contact;
