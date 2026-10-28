const API_URL = import.meta.env.VITE_API_URL;

async function getJson(path) {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export function getSettings() {
  return getJson("/api/common");
}

export function getPage(path) {
  const pagePath = path && path !== "" ? path : "/";
  return getJson(`/api/page?path=${encodeURIComponent(pagePath)}`);
}
