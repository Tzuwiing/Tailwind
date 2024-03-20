/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< Updated upstream
  darkMode: 'class',
=======
  darkMode: "class",
>>>>>>> Stashed changes
  content: ["./public/**/*.{html,js}"],
  theme: {
    // container: {
    //   center: true,
    // },
    // spacing: {
    //   //kalo spacing dibawah tema, mengubah kode kelas awal/default, kalo extend menambahkan
    //   1: "10rem",
    // },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        abudzar: "bergerak 1s ease-in-out infinite",
      },
      keyframes: {
        bergerak: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      spacing: {
        hamzah: "3.25rem",
        tugas34: "300px",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      fontSize: {
        pondok: ["7rem"],
      },
      colors: {
        mouse: "dda15e",
        keyboard: {
          100: "#606c38",
          900: "#283618",
        },
      },
    },
  },
  plugins: [],
};
