export const SITE_CONFIG = {
  name: "Smart UAE Guide",
  shortName: "SmartUAE",
  url: "https://smartuaeguide.com",
  description: "Money, tools, and expat life in UAE with simple guides.",
  email: "contact@smartuaeguide.com",
  logo: "/uae-guide-logo.png",
} as const;

// Alias for backwards compatibility with imported pages
export const COMPANY = SITE_CONFIG;
