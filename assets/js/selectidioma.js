const select = document.getElementById("language-select");

const supportedLangs = ["es", "en", "fr", "ar"];

const pageMap = {
  "guisante": {
    es: "paja-de-guisante",
    en: "pea-straw-bales",
    fr: "paille-pressée-pois",
    ar: "guisante",
  },
  "heno": {
    es: "heno-de-avena",
    en: "oat-hay",
    fr: "foin-d’avoine",
    ar: "heno",
  },
  "imabe": {
    es: "paja-fibra-semipicada-imabe",
    en: "straw-semi-chopped-fiber-imabe",
    fr: "paille-fibre-semi-hachée-imabe",
    ar: "imabe",
  },
  "jovisa": {
    es: "paja-fibra-larga-jovisa",
    en: "long-fiber-straw-jovisa",
    fr: "paille-pressée-fibre-longue-jovisa",
    ar: "jovisa",
  },
  "paquetep": {
    es: "paquetes-pequeños",
    en: "small-bale-pressed-straw",
    fr: "petite-botte-de-paille",
    ar: "paquetep",
  },
  "": {  // Página principal
    es: "",
    en: "",
    fr: "",
    ar: "",
  },
};

function getCurrentLangFromPath() {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  if (pathParts[0] === "en") return "en";
  if (pathParts[0] === "fr") return "fr";
  if (pathParts[0] === "ar") return "ar";
  return "es";
}

function getCurrentPageKey() {
  const lang = getCurrentLangFromPath();
  const parts = window.location.pathname.split("/").filter(Boolean);

  const slug = (lang === "es") ? (parts[0] || "") : (parts[1] || "");

  for (const [key, langs] of Object.entries(pageMap)) {
    for (const l of supportedLangs) {
      if (langs[l] === slug) return key;
    }
  }

  return "";
}

// Inicializar selector con idioma actual
select.value = getCurrentLangFromPath();

// Manejar cambio de idioma
select.addEventListener("change", () => {
  const newLang = select.value;
  localStorage.setItem("lang", newLang);

  const pageKey = getCurrentPageKey();
  const slug = pageMap[pageKey]?.[newLang] || "";

  const newPath = (newLang === "es" && slug !== "")
    ? `/${slug}/`
    : (newLang === "es" && slug === "")
      ? `/`
      : `/${newLang}/${slug ? slug + "/" : ""}`;

  window.location.href = newPath;
});
