/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
export default withMT({
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_module/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_module/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

