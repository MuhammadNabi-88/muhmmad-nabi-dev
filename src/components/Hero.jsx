import { useEffect, useState } from "react";
import { profile } from "../data/projects";

const phrases = [
  "From Metzingen.",
  "Web-App Developer.",
  "Java & Spring Boot.",
  "React & JavaScript."
];

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types a phrase, holds it, deletes it, then moves on to the next one.
function useTypewriter(list) {
  const [step, setStep] = useState({ word: 0, length: 0, deleting: false });

  useEffect(() => {
    if (reducedMotion) return undefined;
    const current = list[step.word];
    let delay = step.deleting ? 35 : 85;
    if (!step.deleting && step.length === current.length) delay = 1700;
    if (step.deleting && step.length === 0) delay = 350;

    const timer = setTimeout(() => {
      setStep((s) => {
        const text = list[s.word];
        if (!s.deleting) {
          return s.length < text.length ? { ...s, length: s.length + 1 } : { ...s, deleting: true };
        }
        return s.length > 0
          ? { ...s, length: s.length - 1 }
          : { word: (s.word + 1) % list.length, length: 0, deleting: false };
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [step, list]);

  return reducedMotion ? list[0] : list[step.word].slice(0, step.length);
}

function Hero() {
  const typed = useTypewriter(phrases);

  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <h1>
          Problem Solver.
          <span className="typed-line">
            <span className="sr">From Metzingen.</span>
            <span aria-hidden="true">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </span>
        </h1>
        <p className="lead">
          I am a Fachinformatiker für Anwendungsentwicklung. I build web
          applications with Java, Spring Boot, React and JavaScript, from the
          database to the interface.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">View projects</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn ghost">
            GitHub profile
          </a>
        </div>
      </div>

      <aside className="hero-status" aria-label="Availability">
        <p className="status-title"><span className="status-dot" />Open to new roles</p>
        <dl>
          <div><dt>Focus</dt><dd>Full-stack and front-end development</dd></div>
          <div><dt>Main stack</dt><dd>Java, Spring Boot, React, JavaScript</dd></div>
          <div><dt>Location</dt><dd>Metzingen, Germany</dd></div>
        </dl>
      </aside>
    </section>
  );
}

export default Hero;
