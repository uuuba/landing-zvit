import "./features.css";
import "./courses.css";

const labels = {
  beginner: "початковий",
  middle: "середній",
  advanced: "просунутий",
  video: "відео",
  practice: "практика",
  text: "текст",
  python: "Python",
  web: "Веб",
  data: "Дані",
  ai: "AI/ML",
  db: "Бази даних",
  ux: "UI/UX",
  eng: "Англійська",
};

function label(value) {
  return labels[value] || value;
}

export function courses({ anchor, title, subtitle, items }) {
  const cards = items
    .map(
      ({ title: courseTitle, level, format, topic, hours, image }) => `
        <article class="course">
          <img class="course__image" src="${image.src}" alt="${image.alt}" loading="lazy" />
          <div class="course__body">
            <p class="course__meta">${label(topic)} · ${label(level)}</p>
            <h3 class="course__title">${courseTitle}</h3>
            <p class="course__hours">${hours} год · ${label(format)}</p>
          </div>
        </article>`,
    )
    .join("");

  return `
    <section class="courses" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <p class="courses__subtitle">${subtitle}</p>
      <div class="courses__grid">${cards}</div>
    </section>
  `;
}
