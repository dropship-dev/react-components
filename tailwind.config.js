/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  safelist: [
    {
      pattern: /border-(solid|dashed|dotted|none|double)/,
      variants: ["hover"],
    },
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
    fontSize: {
      textXS: ["12px", "18px"],
      textSM: ["14px", "20px"],
      textMD: ["16px", "24px"],
      textLG: ["18px", "28px"],
      textXL: ["20px", "30px"],
      displayXS: ["24px", "32px"],
      displaySM: ["30px", "38px"],
      displayMD: ["36px", "44px"],
      displayLG: ["48px", "60px"],
      displayXL: ["60px", "72px"],
      displayXXL: ["72px", "90px"],
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

      dropShadow: {
        default:
          "0px -12px 16px -4px rgba(5, 10, 73, 0.08), 0px -4px 6px -2px rgba(5, 10, 73, 0.03)",
      },

      boxShadow: {
        primary: "0 0 0 4px #DBDDFF",
        gray: "0 0 0 4px #EAECF0",
        secondary: "0 0 0 4px #DBDDFF",
        danger: "0 0 0 4px #FDE4F2",
      },

      fontWeight: {
        thin: "100",
        hairline: "100",
        extraLight: "200",
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
        switch: "hsl(var(--switch))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          focus: "hsl(var(--primary-focus))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          25: "hsl(var(--primary-25))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
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
          25: "hsl(var(--destructive-25))",
          50: "hsl(var(--destructive-50))",
          100: "hsl(var(--destructive-100))",
          200: "hsl(var(--destructive-200))",
          300: "hsl(var(--destructive-300))",
          400: "hsl(var(--destructive-400))",
          500: "hsl(var(--destructive-500))",
          600: "hsl(var(--destructive-600))",
          700: "hsl(var(--destructive-700))",
          800: "hsl(var(--destructive-800))",
          900: "hsl(var(--destructive-900))",
          950: "hsl(var(--destructive-950))",
        },

        danger: {
          25: "hsl(var(--danger-25))",
          50: "hsl(var(--danger-50))",
          100: "hsl(var(--danger-100))",
          200: "hsl(var(--danger-200))",
          300: "hsl(var(--danger-300))",
          400: "hsl(var(--danger-400))",
          500: "hsl(var(--danger-500))",
          600: "hsl(var(--danger-600))",
          700: "hsl(var(--danger-700))",
          800: "hsl(var(--danger-800))",
          900: "hsl(var(--danger-900))",
          950: "hsl(var(--danger-950))",
        },

        normal: {
          DEFAULT: "hsl(var(--destructive-400))",
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
          25: "hsl(var(--success-25))",
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          300: "hsl(var(--success-300))",
          400: "hsl(var(--success-400))",
          500: "hsl(var(--success-500))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          950: "hsl(var(--success-950))",
        },
        warning: {
          25: "hsl(var(--warning-25))",
          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          200: "hsl(var(--warning-200))",
          300: "hsl(var(--warning-300))",
          400: "hsl(var(--warning-400))",
          500: "hsl(var(--warning-500))",
          600: "hsl(var(--warning-600))",
          700: "hsl(var(--warning-700))",
          800: "hsl(var(--warning-800))",
          900: "hsl(var(--warning-900))",
          950: "hsl(var(--warning-950))",
        },
        gray: {
          25: "hsl(var(--neutral-25))",
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
          950: "hsl(var(--neutral-900))",
        },
        grayVariant: {
          25: "hsl(var(--neutral-variant-25))",
          50: "hsl(var(--neutral-variant-50))",
          100: "hsl(var(--neutral-variant-100))",
          200: "hsl(var(--neutral-variant-200))",
          300: "hsl(var(--neutral-variant-300))",
          400: "hsl(var(--neutral-variant-400))",
          500: "hsl(var(--neutral-variant-500))",
          600: "hsl(var(--neutral-variant-600))",
          700: "hsl(var(--neutral-variant-700))",
          800: "hsl(var(--neutral-variant-800))",
          900: "hsl(var(--neutral-variant-900))",
          950: "hsl(var(--neutral-variant-900))",
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: [],
  },
};
