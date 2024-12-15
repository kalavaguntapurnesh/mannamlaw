/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        // slidein500: "slidein 1s ease 500ms forwards",
        // slidein700: "slidein 1s ease 700ms forwards",
      },
      container: {},
      colors: {
        // mainColor: "#16b6ea",
        // mainColor: "#1e5caf",
        // mainColor: "#bb2b36",
        // mainColor: "#187e4c",
        // headingColor: "#19191B",
        mainColor: "#B31942",
        // mainColor: "#081a59",
        // headingColor: "#444",
        // headingColor: "#081026",
        headingColor: "#0A3161",
        // sideHeading: "#474749",
        // sideHeading: "#2D3A5F",
        sideHeading:"#081026",
        grayColor: "#585858",
        navGray: "#dddddd",
        buttons: "#0064c8",
        footerbg: "#24272b",
        footerItems: "#9ca3af",
        navColor: "#24272b",
        privacyColor: "#7A7A7A",
      },
    },
  },
  plugins: [],
};
