export function header({ siteName, menu, cta, phone }) {
  const links = menu
    .map(
      ({ label, link }) =>
        `<a class="header__link" href="${link}">${label}</a>`,
    )
    .join("");

  const phoneLink = phone
    ? `<a class="header__phone" href="tel:${phone.replace(/[^\d+]/g, "")}">${phone}</a>`
    : "";

  const action = cta
    ? `<a class="btn btn--primary header__cta" href="${cta.link}">${cta.label}</a>`
    : "";

  return `
    <header class="header">
      <a class="header__logo" href="/" aria-label="${siteName}">
        <img src="/logo.svg" alt="${siteName}" width="210" height="32" />
      </a>
      <nav class="header__nav" aria-label="Розділи сторінки">${links}</nav>
      ${phoneLink}
      ${action}
    </header>
  `;
}
