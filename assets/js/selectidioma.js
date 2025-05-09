const select = document.getElementById("language-select");

const supportedLangs = ["es", "en", "fr", "ar"];

function getInitialLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && supportedLangs.includes(stored)) return stored;

  const browserLang = navigator.language.slice(0, 2);
  return supportedLangs.includes(browserLang) ? browserLang : "es";
}

function getCurrentLangFromPath() {
  const pathParts = window.location.pathname.split("/");
  if (pathParts.includes("fr")) return "fr";
  if (pathParts.includes("en")) return "en";
  if (pathParts.includes("ar")) return "ar";
  return "es";
}

function getCurrentPageFolder() {
  const pathParts = window.location.pathname.split("/").filter(Boolean); // elimina strings vacíos
  const lang = getCurrentLangFromPath();

  if (supportedLangs.includes(pathParts[0])) {
    return pathParts[1] || ""; // ej: /fr/jovisa/ => jovisa
  } else {
    return pathParts[0] || ""; // ej: /jovisa/ => jovisa
  }
}

// Inicializar selector con idioma actual
select.value = getCurrentLangFromPath();

// Manejar cambio de idioma
select.addEventListener("change", () => {
  const newLang = select.value;
  localStorage.setItem("lang", newLang);

  const currentPage = getCurrentPageFolder();
  let newUrl = "";

  if (newLang === "es") {
    newUrl = "/" + (currentPage ? currentPage + "/" : "");
  } else {
    newUrl = `/${newLang}/` + (currentPage ? currentPage + "/" : "");
  }

  window.location.href = newUrl;
});
