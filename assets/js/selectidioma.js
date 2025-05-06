const select = document.getElementById("language-select");

const supportedLangs = ["es", "en", "fr", "ar"];

function getInitialLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && supportedLangs.includes(stored)) return stored;

  const browserLang = navigator.language.slice(0, 2);
  return supportedLangs.includes(browserLang) ? browserLang : "es";
}

function getCurrentPageName() {
  const parts = window.location.pathname.split("/");
  return parts.pop() || "index.html"; // default to index.html
}

function getCurrentLangFromPath() {
  const pathParts = window.location.pathname.split("/");
  if (pathParts.includes("fr")) return "fr";
  if (pathParts.includes("en")) return "en";
  if (pathParts.includes("ar")) return "ar";
  return "es"; // Default to Spanish if no folder
}

// Inicializar selector con idioma actual
const initialLang = getInitialLanguage();
select.value = initialLang;

// Manejar cambio de idioma
select.addEventListener("change", () => {
  const newLang = select.value;
  localStorage.setItem("lang", newLang);

  const currentPage = getCurrentPageName();

  let newUrl = "";

  if (newLang === "es") {
    newUrl = "/" + currentPage; // raíz
  } else {
    newUrl = `/${newLang}/${currentPage}`; // dentro de carpeta de idioma
  }

  window.location.href = newUrl;
});
