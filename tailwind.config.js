/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Blinker',
      'mono': 'VT323'
    },
    extend:{
      backgroundImage: {
        'hero-pattern': "url(https://images.unsplash.com/photo-1701637409528-2f008783facc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      }
    }
  },
  plugins: [],
}

