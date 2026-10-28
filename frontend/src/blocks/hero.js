import "./hero.css";

export function hero({ anchor, badge, title, subtitle, image, buttons, stats = [] }) {
  const actions = buttons
    .map(
      ({ text, link, variant }) =>
        `<a class="btn btn--${variant}" href="${link}">${text}</a>`,
    )
    .join("");

  const figures = stats
    .map(
      ({ value, label }) => `
        <li class="hero__stat">
          <strong>${value}</strong>
          <span>${label}</span>
        </li>`,
    )
    .join("");

  return `
    <section class="hero" id="${anchor}">
      <div class="hero__content">
        <span class="hero__badge">${badge}</span>
        <h1 class="hero__title">${title}</h1>
        <p class="hero__subtitle">${subtitle}</p>
        <div class="hero__actions">${actions}</div>
        ${figures ? `<ul class="hero__stats">${figures}</ul>` : ""}
      </div>
      <img class="hero__image" src="${image.src}" alt="${image.alt}" />
    </section>
  `;
}
