import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        "accent-fg": "hsl(var(--accent-text))",
        steel: { DEFAULT: "hsl(var(--steel))", foreground: "hsl(var(--steel-foreground))" },
        "steel-fg": "hsl(var(--steel-text))",
        sage: { DEFAULT: "hsl(var(--sage))", foreground: "hsl(var(--sage-foreground))" },
        "sage-fg": "hsl(var(--sage-text))",
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--foreground))" },
      },
      borderRadius: { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)" },
      spacing: Object.fromEntries(
        Array.from({ length: 12 }, (_, index) => [index + 1, `var(--space-${index + 1})`]),
      ),
      fontFamily: { sans: ["var(--font-geist-sans)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
