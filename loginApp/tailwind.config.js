/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1280px',
        'laptop': '1024px',
        'tablet': '640px',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      colors: {
        'pink-btn': '#e11371',
        'pink-bg': '#efabbf',
      },
      boxShadow: {
        'btn-shadow':'4px 4px 14px 4px 	#4e535a',
      },
      border: {
        'border-lines': 'border-gray-200',
      },
    },
  },
  plugins: [],
}