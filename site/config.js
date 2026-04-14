/**
 * TabulaKit Site Configuration
 *
 * Edit these values to customize your documentation site.
 * The /startup wizard will configure these for you automatically.
 */
window.TABULAKIT_CONFIG = {
  // Site identity
  name: "AI Workshop",
  description: "TabulaKit's full course guide for workshop participants.",
  logo: "tabula.svg",  // Path to logo image (optional, shown in sidebar)

  // Theme colors (CSS custom property overrides)
  theme: {
    color: "#f97316",           // Primary accent color (headings)
    tealColor: "#22c55e",       // Secondary accent (links, nav highlights)
    sidebarWidth: "280px",
    baseFontSize: "20px"
  },

  // Docsify options (merged into window.$docsify)
  docsify: {
    subMaxLevel: 3,
    search: true
  }
};
