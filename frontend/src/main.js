import { getSettings, getPage } from "./api.js";
import { header } from "./layout/header.js";
import { footer } from "./layout/footer.js";
import { renderBlocks } from "./renderBlocks.js";
import "./styles/base.css";

const app = document.querySelector("#app");

async function start() {
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname),
    ]);

    document.title = `${page.title} — ${settings.siteName}`;
    app.innerHTML = `
      ${header(settings)}
      <main>${renderBlocks(page.blocks)}</main>
      ${footer(settings)}
    `;
  } catch (error) {
    app.innerHTML = `<p class="app-error">Щось пішло не так. ${error.message}</p>`;
  }
}

start();
