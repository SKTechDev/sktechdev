const defaultTheme = require("tailwindcss/defaultTheme");
const themeConstant = require("./theme.ts")

module.exports = {
  content: [
    "../../packages/ui/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  corePlugins: {
      preflight: false,
  },
  important: '#__next',
  theme: {
    extend: {
      colors : {
        primary: themeConstant.colors.primary,
        secondary: themeConstant.colors.secondary,
        surface: themeConstant.colors.surface,
        error: themeConstant.colors.error,
        fg: themeConstant.colors.fg,
      },
      fontSize: {
        "2xs": "0.6875rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.375rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "2.8125rem",
        "6xl": "3.5625rem",
      },
      fontFamily: {
        roboto: "Roboto",
        sora: "Sora",
      },
      borderRadius: {
        none: "0",
      },
      boxShadow: {
        DEFAULT:
          "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        md: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        lg: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        xl: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        "2xl":
          "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
      },
    },
    screens: {
      ...themeConstant.screens,
      ...themeConstant.breakpoints,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
