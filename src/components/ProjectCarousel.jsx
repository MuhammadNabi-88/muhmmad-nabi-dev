import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const VISIBLE = 3;                     // cards shown on each side of the centre card
const MIN_SLOTS = 2 * VISIBLE + 3;     // rows with few projects repeat them until the arc is full
const INTERVAL = 3600;                 // ms between automatic slides

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Position of one card in the 3D arc. offset 0 = centre, negative = left, positive = right.
function place(offset, spread) {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);
  const step = Math.min(abs, VISIBLE + 1);
  const x = step === 0 ? 0 : sign * (200 + (step - 1) * 92) * spread;
  const rotate = step === 0 ? 0 : -sign * Math.min(24 + step * 6, 48);
  const scale = 1 - Math.min(step, 4) * 0.06;
  return {
    transform: `translateX(${x}px) translateZ(${-step * 60}px) rotateY(${rotate}deg) scale(${scale})`,
    zIndex: 100 - step,
    opacity: abs > VISIBLE ? 0 : 1,
    pointerEvents: abs > VISIBLE ? "none" : "auto",
    "--veil": Math.min(step * 0.14, 0.5)
  };
}

// One technology row: a 3D "coverflow". It advances on its own, loops without an end and
// fills itself for any number of projects. Odd rows move forward, even rows backward.
function ProjectCarousel({ category, number, items }) {
  const stage = useRef(null);
  const hold = useRef({ hover: false, focus: false, hidden: false });
  const drag = useRef(null);

  const single = items.length === 1;
  const repeats = single ? 1 : Math.ceil(MIN_SLOTS / items.length);
  const slides = Array.from({ length: repeats }, () => items).flat();
  const total = slides.length;
  const direction = number % 2 === 0 ? -1 : 1;

  const [active, setActive] = useState(0);
  const [spread, setSpread] = useState(1);

  const go = useCallback((step) => setActive((a) => (a + step + total) % total), [total]);

  useEffect(() => {
    const el = stage.current;
    const resize = new ResizeObserver(([entry]) => {
      setSpread(Math.max(0.36, Math.min(1, entry.contentRect.width / 1100)));
    });
    resize.observe(el);
    const visibility = new IntersectionObserver(([entry]) => {
      hold.current.hidden = !entry.isIntersecting;
    });
    visibility.observe(el);

    let timer;
    if (!single && !reducedMotion) {
      timer = setInterval(() => {
        const h = hold.current;
        if (!h.hover && !h.focus && !h.hidden) go(direction);
      }, INTERVAL);
    }
    return () => {
      clearInterval(timer);
      resize.disconnect();
      visibility.disconnect();
    };
  }, [single, direction, go]);

  const offsetOf = (index) => {
    let d = (((index - active) % total) + total) % total;
    if (d > total / 2) d -= total;
    return d;
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  };

  const onPointerUp = (event) => {
    if (drag.current === null) return;
    const dx = event.clientX - drag.current;
    drag.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      className="category"
      style={{ "--cat": category.accent, "--tint": category.tint }}
      role="group"
      aria-labelledby={`cat-${category.id}`}
    >
      <header className="category-head">
        <span className="category-number" aria-hidden="true">
          {String(number).padStart(2, "0")}
        </span>
        <div>
          <h3 id={`cat-${category.id}`}>{category.title}</h3>
          <p>{category.blurb}</p>
        </div>
      </header>

      <div
        className="stage"
        ref={stage}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label={`${category.title} projects`}
        onKeyDown={onKeyDown}
        onMouseEnter={() => { hold.current.hover = true; }}
        onMouseLeave={() => { hold.current.hover = false; }}
        onFocus={() => { hold.current.focus = true; }}
        onBlur={() => { hold.current.focus = false; }}
        onPointerDown={(e) => { drag.current = e.clientX; }}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { drag.current = null; }}
      >
        {slides.map((project, index) => {
          const offset = offsetOf(index);
          return (
            <div
              className="slide"
              key={`${index}-${project.id}`}
              style={place(offset, spread)}
              onClickCapture={(event) => {
                // A side card first moves to the centre; its buttons work once it is there.
                if (offset !== 0) {
                  event.preventDefault();
                  event.stopPropagation();
                  setActive(index);
                }
              }}
            >
              <ProjectCard project={project} inactive={offset !== 0} />
            </div>
          );
        })}

        {!single && (
          <>
            <button type="button" className="nav-arrow prev" onClick={() => go(-1)} aria-label={`Previous ${category.title} project`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button type="button" className="nav-arrow next" onClick={() => go(1)} aria-label={`Next ${category.title} project`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCarousel;
