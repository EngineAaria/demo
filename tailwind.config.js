/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        infinka: {
          purple: "#3D0A5A",
          gold: "#D4AF37",
          cream: "#F7F2EC",
          charcoal: "#111827"
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
