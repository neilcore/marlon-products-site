/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xmobile': {'max': '428px'},
        'mmobile': '375px',
        'laptopL': '1440px',
        'hybridL': '1490px',
      },
      fontFamily: {
        openregular: ["OpenSans-Regular"],
        openmedium: ["OpenSans-Medium"],
        openlight: ["OpenSans-Light"],
        opensemibold: ["OpenSans-SemiBold"],
        openbold: ["OpenSans-Bold"],
        openextrabold: ["OpenSans-ExtraBold"],
        manroperegular: ["Manrope-Regular"],
        manropemedium: ["Manrope-Medium"],
        manropelight: ["Manrope-Light"],
        maropeextralight: ["Manrope-ExtraLight"],
        manropesemibold: ["Manrope-SemiBold"],
        manropebold: ["Manrope-Bold"],
        manropeextrabold: ["Manrope-ExtraBold"]
      },
      colors: {
        'custombrown': '#414244',
      },
      zIndex: {
        '-1': '-1',
        '1': '1',
        '2': '2',
        '3': '3',
      },
      boxShadow: {
        'customshadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}

