/**
 * TabulaKit Site Configuration
 *
 * Edit these values to customize your documentation site.
 * The /startup wizard will configure these for you automatically.
 */
window.TABULAKIT_CONFIG = {
  // Site identity
  name: "TabulaKit Workshop",
  description: "TabulaKit's full course guide for workshop participants.",
  logo: "",  // Path to logo image (optional, shown in sidebar)

  // Theme colors (CSS custom property overrides)
  theme: {
    color: "#22c55e",           // Primary accent color (headings)
    tealColor: "#3bc0cb",       // Secondary accent (links, nav highlights)
    sidebarWidth: "280px",
    baseFontSize: "20px"
  },

  // Docsify options (merged into window.$docsify)
  docsify: {
    subMaxLevel: 3,
    search: true
  }
};
