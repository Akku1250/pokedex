/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        'pokedex-layout': '105px 1fr',
        'pokemon-layout': '250px 1fr',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        medium: 'hsl(var(--medium))',
        light: 'hsl(var(--light))',
        pokebug: 'hsl(var(--poke-bug))',
        pokedark: 'hsl(var(--poke-dark))',
        pokedragon: 'hsl(var(--poke-dragon))',
        pokeelectric: 'hsl(var(--poke-electric))',
        pokefairy: 'hsl(var(--poke-fairy))',
        pokefighting: 'hsl(var(--poke-fighting))',
        pokefire: 'hsl(var(--poke-fire))',
        pokeflying: 'hsl(var(--poke-flying))',
        pokeghost: 'hsl(var(--poke-ghost))',
        pokegrass: 'hsl(var(--poke-grass))',
        pokeground: 'hsl(var(--poke-ground))',
        pokeice: 'hsl(var(--poke-ice))',
        pokenormal: 'hsl(var(--poke-normal))',
        pokepoison: 'hsl(var(--poke-poison))',
        pokepsychic: 'hsl(var(--poke-psychic))',
        pokerock: 'hsl(var(--poke-rock))',
        pokesteel: 'hsl(var(--poke-steel))',
        pokewater: 'hsl(var(--poke-water))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
