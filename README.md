# Muhammad Nabi – Portfolio

**Application developer (Fachinformatiker für Anwendungsentwicklung) from Metzingen, Germany.**
I build web applications with Java, Spring Boot, React and JavaScript, from the database to the user interface.

- **Live portfolio:** https://muhmmad-nabi-dev-wkl5.vercel.app/
- **GitHub:** https://github.com/MuhammadNabi-88
- **Email:** muhmdnabi.dev@yahoo.com

---

## For recruiters: the 30-second version

| | |
|---|---|
| **Role** | Full-stack and front-end developer, open to suitable IT roles |
| **Training** | Fachinformatiker für Anwendungsentwicklung (application development), 2021 to 2023 |
| **Practical experience** | 6-month internship in application development (React, TypeScript, REST APIs) |
| **Strongest areas** | Java and Spring Boot back-ends, React and JavaScript front-ends, REST API integration, SQL databases |
| **Based in** | Metzingen (Baden-Württemberg), Germany |

**Where to look first:** the *Selected projects* section of the live site. Every project has its source code on GitHub, and most have a live demo you can click through. A good starting point is **Worksnetz** (Java, Spring Boot, Spring Security) for back-end skills and **WeatherPro** (React, external API) for front-end skills.

---

## Selected projects

The projects are grouped by technology, in five sections.

### 01 Java Development (Java, Spring Boot)

| Project | What it is | Main technologies | Demo |
|---|---|---|---|
| **Moneta – Expense Manager** | Full-stack expense tracker. A Spring Boot REST API stores income and expenses and calculates monthly statistics. A responsive dashboard shows balance, spending by category and a six-month trend. | Java 21, Spring Boot, REST API, JPA, PostgreSQL, Docker | Coming soon |
| **Worksnetz – Job Board** | Job and freelance network with user registration, login, job search and applications. | Spring Boot, Spring Security, JPA, Thymeleaf | [Open](https://worksnetz.onrender.com/) |
| **Expense Manager – Desktop** | Desktop application for tracking expenses, written with an object-oriented design, file handling and financial calculations. | Java, Swing, OOP | – |

### 02 JavaScript Applications

| Project | What it is | Main technologies | Demo |
|---|---|---|---|
| **Finance Tracker Dashboard** | Personal finance dashboard with income, expenses, charts and statistics. | HTML, CSS, JavaScript, Chart.js | [Open](https://muhammadnabi-88.github.io/Finora-Finance-Tracker/) |
| **WeatherPro** | Weather app with city search, live conditions, an hourly chart and a 7-day forecast from the Open-Meteo API. | React, Vite, Open-Meteo API | [Open](https://weatherpro-react-rho.vercel.app/) |
| **FlyMetzingen – Flight Booking** | Flight search and booking flow that generates a PDF ticket. | JavaScript, Amadeus API, jsPDF | [Open](https://muhammadnabi-88.github.io/-FlyMetzingen-/) |

### 03 React & TypeScript

WeatherPro and this portfolio website are both built with React.

### 04 Web Development (HTML, CSS, JavaScript)

| Project | What it is | Main technologies | Demo |
|---|---|---|---|
| **Portfolio Website** | This site. | React, Vite, CSS3 | [Open](https://web-app-entwickler.vercel.app/) |
| **Business Website – Metzingen** | Responsive business website with a contact form and search engine optimisation. | HTML5, CSS3, JavaScript, SEO | [Open](https://muhammadnabi-88.github.io/metzingen-business-solutions/) |

### 05 PHP & Database Systems (PHP, MySQL)

| Project | What it is | Main technologies | Demo |
|---|---|---|---|
| **Maison & Co. – Shop System** | Online shop with product management, shopping cart, user login and an admin panel (CRUD and authentication). | PHP, MySQL, JavaScript | [Open](https://maison-co-shop.freehosting.dev/) |

> Some demos run on free hosting. If a demo has been idle, the first load can take up to a minute.

---

## Technical skills

| Area | Technologies |
|---|---|
| Front-end | React, JavaScript, TypeScript, HTML5, CSS3 |
| Styling | Tailwind CSS, responsive design |
| Back-end | Java, Spring Boot, Python, PHP |
| Databases | MySQL, PostgreSQL, JPA / Hibernate |
| APIs | REST APIs, API integration |
| Tools | Git, GitHub, Docker, Maven, IntelliJ IDEA |

## Experience and education

| Period | Role | Where | What I did |
|---|---|---|---|
| 03/2023 – 08/2023 | Internship, application development | enisyst GmbH, Reutlingen | React and TypeScript front-end work, UI implementation, REST API integration |
| 09/2021 – 08/2023 | Fachinformatiker für Anwendungsentwicklung | GFN GmbH, Stuttgart | Training in software development, databases and web technologies |

---

## About this website

The portfolio is a single-page site built with **React 19** and **Vite**. It has no back-end and no tracking.

### What it contains

1. **Hero:** introduction with a self-typing line of roles.
2. **Selected projects:** five numbered technology rows. Each row is a 3D carousel with the active project in the centre. It advances on its own, loops without an end, pauses on hover, and can be controlled with arrows, swipe or the keyboard arrow keys. It fills itself automatically, however many projects a row contains. Every card shows a preview of the project and clear **Live demo** and **GitHub** buttons.
3. **About me:** background and working style.
4. **Technical expertise:** skills grouped by area.
5. **Professional experience:** internship and training as a timeline.
6. **Contact:** email, GitHub and LinkedIn.

### Design decisions

- Off-white background, deep navy text and electric-blue accents. Each technology row has its own accent colour.
- Fonts: Sora for headings, DM Sans for text.
- Responsive layout for desktop, tablet and mobile.
- Accessibility: visible keyboard focus, text alternatives for images, repeated carousel copies hidden from screen readers and the Tab key, and no animation for visitors who have *reduce motion* turned on.

### Project preview images

Each card shows a live screenshot of the demo site, loaded from the free WordPress mshots service (Worksnetz uses its own screenshot in `public/projects/`). Projects without a demo show a generated sketch instead. Own images can replace both (see *Edit the content* below).

---

## Run it locally

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build
npm run deploy     # publish /dist to GitHub Pages (gh-pages)
```

If `npm install` reports a JSON error, delete an empty `package-lock.json` and run the command again.

The site can also be deployed to Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output folder.

## Project structure

```
src/
  data/projects.js          all content: profile, sections, projects
  components/
    Navbar.jsx              top navigation
    Hero.jsx                introduction and typing effect
    Projects.jsx            the five project sections
    ProjectCarousel.jsx     one auto-sliding row
    ProjectCard.jsx         one project card
    ProjectPreview.jsx      screenshot or generated preview
    About.jsx, Skills.jsx, Experience.jsx, Contact.jsx
  App.jsx                   page layout
  App.css, index.css        styles and design tokens
public/
  favicon.svg
```

## Edit the content

Everything is in `src/data/projects.js`, so no component code needs to change.

- **Profile:** email, GitHub and LinkedIn. The LinkedIn link appears as soon as `linkedin` is filled in.
- **Add a project:** add an entry to `projects` and list one or more section ids in its `categories`.
- **Add a section:** add an entry to `categories` with a title, accent colour and tint.
- **Own preview image:** save a PNG or JPG in `public/projects/` and set `image: "/projects/name.png"` on the project.
- **Demo not ready yet:** set `demo: "#"` and the card shows "Demo coming soon".

---

## Contact

I am open to suitable IT roles in application development. The quickest way to reach me is email.

- Email: muhmdnabi.dev@yahoo.com
- GitHub: https://github.com/MuhammadNabi-88

© Muhammad Nabi
