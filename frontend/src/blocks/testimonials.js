import "./features.css";

export function testimonials({ anchor, title, items }) {
  const cards = items
    .map(({ name, text, rating }) => {
      const score = Number(rating) || 0;
      const stars = "★".repeat(score);
      return `
        <blockquote class="testimonial">
          <div class="testimonial__rating" aria-label="Оцінка ${score} з 5">${stars}</div>
          <p class="testimonial__text">${text}</p>
          <footer class="testimonial__name">${name}</footer>
        </blockquote>`;
    })
    .join("");

  return `
    <section class="testimonials" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <div class="testimonials__list">${cards}</div>
    </section>
  `;
}
