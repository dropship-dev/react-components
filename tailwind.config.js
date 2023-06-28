/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        {
          fontFeatureSettings: "Inter",
          fontVariationSettings: "Inter",
        },
      ],
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          focus: "hsl(var(--primary-focus))",
          100: "hsl(var(--primary-100))",
          400: "hsl(var(--primary-400))",
          "500p": "hsl(var(--primary-500p))",
        },
        white: {
          DEFAULT: "hsl(var(--white))",
          foreground: "hsl(var(--white-foreground))",
          focus: "hsl(var(--white-focus))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          600: "hsl(var(--destructive-600))",
          50: "hsl(var(--destructive-50))",
          100: "hsl(var(--destructive-100))",
          400: "hsl(var(--destructive-400))",
          700: "hsl(var(--destructive-700))",
          950: "hsl(var(--destructive-950))",
          500: "hsl(var(--destructive-500))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success-400))",
          100: "hsl(var(--success-100))",
          50: "hsl(var(--success-50))",
          400: "hsl(var(--success-400))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          950: "hsl(var(--success-950))",
        },
        warning: {
          100: "hsl(var(--warning-100))",
          400: "hsl(var(--warning-400))",
          700: "hsl(var(--warning-700))",
        },
        gray: {
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          900: "hsl(var(--neutral-900))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};