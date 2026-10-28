export function footer({ siteName, footer: footerContent }) {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <img src="/logo.svg" alt="" width="168" height="26" />
      <p>${year} ${siteName}. ${footerContent.text}</p>
      ${footerContent.credits ? `<p class="footer__credits">${footerContent.credits}</p>` : ""}
    </footer>
  `;
}
