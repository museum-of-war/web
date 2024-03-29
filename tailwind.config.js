/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 32px 4px rgba(33, 33, 33, 0.3)',
      },
      colors: {
        carbon: {
          DEFAULT: '#212121',
          800: '#212121cc',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        dark_gray: {
          DEFAULT: '#6b7280',
        },
        light_gray: {
          DEFAULT: '#f1f6f6',
        },
        beige: {
          DEFAULT: '#E9E9E9',
        },
        dropdown: { DEFAULT: '#383838' },
      },
      height: (theme) => ({
        '3%': '3%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '12.5%': '12.5%',
        '15%': '15%',
        '30%': '30%',
        '45%': '45%',
        '1px': '1px',
        '2px': '2px',
        '2.5px': '2.5px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '64px': '64px',
        '75px': '75px',
        '90px': '90px',
        '100px': '100px',
        '125px': '125px',
        '150px': '150px',
        '192px': '192px',
        '200px': '200px',
        '225px': '225px',
        '250px': '250px',
        '283px': '283px',
        '300px': '300px',
        '350px': '350px',
        '377px': '377px',
        '400px': '400px',
        '500px': '500px',
        'screen5%': '5vh',
        'screen7%': '7vh',
        'screen8%': '8vh',
        'screen9%': '9vh',
        'screen10%': '10vh',
        'screen12%': '12vh',
        'screen14%': '14vh',
        'screen15%': '15vh',
        'screen20%': '20vh',
        'screen22%': '22vh',
        'screen25%': '25vh',
        'screen30%': '30vh',
        'screen40%': '40vh',
        'screen42%': '42vh',
        'screen50%': '50vh',
        'screen52%': '52vh',
        'screen55%': '55vh',
        'screen58%': '58vh',
        'screen60%': '60vh',
        'screen63%': '60vh',
        'screen65%': '65vh',
        'screen75%': '75vh',
        'screen80%': '80vh',
        'screen85%': '85vh',
        'screen90%': '90vh',
        'screen100%': '100vh',
        'width87.5': '87.5vw',
        'screen/3': 'calc(100vh / 3)',
        'screen/6': 'calc(100vh / 6)',
        'screen/7': 'calc(100vh / 7)',
        'screen/8': 'calc(100vh / 8)',
        'screen/9': 'calc(100vh / 9)',
        '1.5em': '1.5em',
        '10em': '10em',
        '12em': '12em',
        '14em': '14em',
        '15em': '15em',
        '16em': '16em',
        '18em': '18em',
        '20em': '20em',
        '10vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',

        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',

        '29.21vw': '29.21vw',
        NFTDETS: 'calc(100vh - 100px)',

        all: 'calc(100vh - 225px)',
      }),
      spacing: {
        0: '0px',
        1: '1px',
        1.5: '1.5px',
        2: '2px',
        2.5: '2.5px',
        3: '3px',
        4: '4px',
        4.5: '4.5px',
        '5px': '5px',
        6: '6px',
        '7px': '7px',
        7: '8px',
        15: '15px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '23px': '23px',
        '24px': '24px',
        '25px': '25px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '48px': '48px',
        '50px': '50px',
        '55px': '55px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
        '65px': '65px',
        '75px': '75px',
        '95px': '95px',
        '96px': '96px',
        '100px': '100px',
        '120px': '120px',
        '132px': '132px',
        '144px': '144px',
        '168px': '168px',
        '175px': '175px',
        '176px': '176px',
        '192px': '192px',
        '240px': '240px',
        '248px': '248px',
        '8.5em': '8.5em',
        q: 'calc(50%)-100',
        '0.3%': '0.3%',
        '0.4%': '0.4%',
        '0.5%': '0.5%',
        '0.75%': '0.75%',
        '1%': '1%',
        '1.2%': '1.2%',
        '1.5%': '1.5%',
        '2%': '2%',
        '2.5%': '2.5%',
        '3%': '3%',
        '3.5%': '3.5%',
        '4%': '4%',
        '5%': '5%',
        '6%': '6%',
        '7%': '7%',
        '8%': '8%',
        '9%': '9%',
        '10%': '10%',
        '12%': '12%',
        '13%': '13%',
        '14%': '14%',
        '15%': '15%',
        '16%': '16%',
        '17%': '17%',
        '18%': '18%',
        '20%': '20%',
        '21%': '21%',
        '23%': '23%',
        '25%': '25%',
        '28%': '28%',
        '30%': '30%',
        '32%': '32%',
        '33%': '33%',

        '35%': '35%',
        '40%': '40%',
        '43.5%': '43.5%',
        '45%': '45%',
        '50%': '50%',
        '52.5%': '52.5%',
        '55%': '55%',
        '57.5%': '57.5%',
        '58.5%': '58.5%',
        '60%': '60%',
        '65%': '65%',
        '70%': '73%',
        '77%': '77%',
        '80%': '80%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%',
        '0.2vw': '0.2vw',
        '1.5vw': '1.5vw',
        '2vw': '2vw',
        '2.5vw': '2.5vw',
        '2.6vw': '2.6vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '5.5vw': '5.5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '10vw': '10vw',
        '15vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '23vh': '23vh',
        '25vh': '25vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '30vh': '30vh',
        '35vh': '35vh',
      },
      width: (theme) => ({
        'screen10%': '10vw',
        'screen12%': '12vw',
        'screen15%': '15vw',
        'screen20%': '20vw',
        'screen22.5%': '22.5vw',
        'screen25%': '25vw',
        'screen28%': '28vw',
        'screen30%': '30vw',
        'screen35%': '35vw',
        'screen40%': '40vw',
        'screen45%': '45vw',
        'screen50%': '50vw',
        'screen60%': '60vw',
        'screen70%': '70vw',
        'screen80%': '80vw',
        'screen85%': '85vw',
        'screen90%': '90vw',

        'screen100%': '100vw',
        '2vw': '2vw',
        '5vw': '5vw',
        '4%': '4%',
        '8%': '8%',
        '10%': '10%',
        '12.5%': '12.5%',
        '15%': '15%',
        '20%': '20%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '55%': '55%',
        '57%': '57%',
        '58%': '58%',
        '60%': '60%',
        '65%': '65%',
        '66.7%': '66.7%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        '1px': '1px',
        '60px': '60px',
        '70px': '70px',
        '110px': '110px',
        '120px': '120px',
        '124px': '124px',
        '150px': '150px',
        '192px': '192px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '400px': '400px',
        '496px': '496px',
        '500px': '500px',
        '544px': '544px',
        '600px': '600px',
        '700px': '700px',
        '5vh': '5vh',
        '15vh': '17vh',
        '25vh': '25vh',
        'screen/3': 'calc(100vw / 3)',
        '10em': '10em',
        '12em': '12em',
        '14em': '14em',
        '15em': '15em',
        '16em': '16em',
        '18em': '18em',
        '20em': '20em',
      }),
      zIndex: {
        1: '1',
        2: '2',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        100: '100',
        150: '150',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
    },
    spacing: {
      0: '0px',
      1: '1px',
      1.5: '1.5px',
      2: '2px',
      2.5: '2.5px',
      3: '3px',
      4: '4px',
      4.5: '4.5px',
      '5px': '5px',
      6: '6px',
      '7px': '7px',
      7: '8px',
      15: '15px',
      '8px': '8px',
      '10px': '10px',
      '12px': '12px',
      '14px': '14px',
      '15px': '15px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '22px': '22px',
      '23px': '23px',
      '25px': '25px',
      '28px': '28px',
      '30px': '30px',
      '32px': '32px',
      '35px': '35px',
      '36px': '36px',
      '40px': '40px',
      '48px': '48px',
      '45px': '45px',
      '50px': '50px',
      '55px': '55px',
      '60px': '60px',
      '65px': '65px',
      '72px': '72px',
      '75px': '75px',
      '80px': '80px',
      '95px': '95px',
      '100px': '100px',
      '150px': '150px',
      '175px': '175px',
      '8.5em': '8.5em',
      q: 'calc(50%)-100',
      '0.3%': '0.3%',
      '0.4%': '0.4%',
      '0.5%': '0.5%',
      '0.75%': '0.75%',
      '1%': '1%',
      '1.2%': '1.2%',
      '1.5%': '1.5%',
      '2%': '2%',
      '2.5%': '2.5%',
      '3%': '3%',
      '3.5%': '3.5%',
      '4%': '4%',
      '5%': '5%',
      '6%': '6%',
      '7%': '7%',
      '8%': '8%',
      '9%': '9%',
      '10%': '10%',
      '12%': '12%',
      '14%': '14%',
      '15%': '15%',
      '16%': '16%',
      '17%': '17%',
      '18%': '18%',
      '20%': '20%',
      '21%': '21%',
      '23%': '23%',
      '25%': '25%',
      '28%': '28%',
      '30%': '30%',
      '32%': '32%',
      '35%': '35%',
      '37%': '37%',
      '40%': '40%',
      '43.5%': '43.5%',
      '45%': '45%',
      '46%': '46%',
      '48%': '48%',
      '50%': '50%',
      '52.5%': '52.5%',
      '55%': '55%',
      '57.5%': '57.5%',
      '58.5%': '58.5%',
      '60%': '60%',
      '65%': '65%',
      '70%': '73%',
      '77%': '77%',
      '80%': '80%',
      '90%': '90%',
      '95%': '95%',
      '100%': '100%',
      '0.2vw': '0.2vw',
      '1.5vw': '1.5vw',
      '2vw': '2vw',
      '2.5vw': '2.5vw',
      '2.6vw': '2.6vw',
      '3vw': '3vw',
      '4vw': '4vw',
      '5vw': '5vw',
      '5.5vw': '5.5vw',
      '6vw': '6vw',
      '7vw': '7vw',
      '8vw': '8vw',
      '10vw': '10vw',
      '15vw': '15vw',
      '25vw': '25vw',
      '30vw': '30vw',
      '35vw': '35vw',
      '10vh': '10vh',
      '15vh': '15vh',
      '20vh': '20vh',
      '23vh': '23vh',
      '25vh': '25vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '30vh': '30vh',
      '35vh': '35vh',
    },
    fontSize: {
      '0px': '0px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '11px': '11px',
      '11.34px': '11.34px',
      '12px': '12px',
      '13px': '13px',
      '14px': '14px',
      '15px': '15px',
      '15.5px': '15.5px',
      '16px': '16px',
      '18px': '18px',
      '19.2903px': '19.2903px',
      '19.29px': '19.29px',
      '20px': '20px',
      '22px': '22px',
      '24px': '24px',
      '26px': '26px',
      '27px': '27px',
      '28px': '28px',
      '29px': '29px',
      '30px': '30px',
      '32px': '32px',
      '34px': '34px',
      '36px': '36px',
      '38px': '38px',
      '40px': '40px',
      '44px': '44px',
      '45px': '45px',
      '46px': '46px',
      '50px': '50px',
      '55px': '55px',
      '57px': '57px',
      '60px': '60px',
      '65px': '65px',
      '70px': '70px',
      '75px': '75px',
      '80px': '80px',
      '84px': '84px',
      '85px': '85px',
      '90px': '90px',
      '100px': '100px',
      '150px': '150px',
      '0.5vw': '0.5vw',
      '0.6vw': '0.6vw',
      '0.7vw': '0.7vw',
      '0.8vw': '0.8vw',
      '1vw': '1vw',
      '1.1vw': '1.1vw',
      '1.3vw': '1.3vw',
      '1.5vw': '1.5vw',
      '2vw': '2vw',
      '2.5vw': '2.5vw',
      '3vw': '3vw',
      '3.5vw': '3.5vw',
      '4vw': '4vw',
      '5vw': '5vw',
      '7vw': '7vw',
      '9vw': '9vw',

      '10vw': '10vw',
      '12vw': '12vw',
      '10%': '10%',
      '250%': '250%',
      '7vh': '7vh',
    },
    maxWidth: {
      none: 'none',
      '10vw': '10vw',
      '50px': '50px',
      '100px': '100px',
      '176px': '176px',
      '200px': '200px',
      '283px': '283px',
      '80vw': '80vw',
      '82vw': '82vw',
      '85vw': '85vw',

      '85%': '85%',
      '300px': '300px',
      '400px': '400px',

      '700px': '700px',
      '1000px': '1000px',
      '100vw': '100vw',
      '100%': '100%',
    },
    minHeight: {
      '10px': '10px',
      '50px': '50px',
      '100px': '100px',
      'screen/8': '12.5vh',
      'screen16.5%': '16.5vh',
      'screen10%': '10vh',
      'screen15%': '15vh',
      'screen20%': '20vh',
      'screen25%': '25vh',
      'screen30%': '30vh',
      'screen40%': '40vh',
      'screen58%': '58vh',
      'screen63%': '63vh',
      'screen71%': '71vh',
      'screen80%': '80vh',
      'screen90%': '90vh',
      'screen100%': '100vh',
      '10vw': '10vw',
      '200px': '200px',
      all: 'calc(100% - 225px)',
    },
    maxHeight: {
      '10vw': '10vw',
      '50px': '50px',
      '100px': '100px',
      '200px': '200px',
      '300px': '300px',
      '400px': '400px',
      '90vh': '90vh',
    },
    lineHeight: {
      '0px': '0px',
      '11px': '11px',
      '12px': '12px',
      '14px': '14px',
      '15px': '15px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '21px': '21px',
      '22px': '22px',
      '24px': '24px',
      '26px': '26px',
      '28px': '28px',
      '29px': '29px',
      '30px': '30px',
      '32px': '32px',
      '34px': '34px',
      '35px': '35px',
      '36px': '36px',
      '40px': '40px',
      '44px': '44px',
      '48px': '48px',
      '50px': '50px',
      '55px': '55px',
      '60px': '60px',
      '70px': '70px',
      '72px': '72px',
      '80px': '80px',
      '100px': '100px',
      '0.7vw': '0.7vw',
      '1vw': '1vw',
      '1.3vw': '1.3vw',
      '1.5vw': '1.5vw',
      '2vw': '2vw',
      '2.5vw': '2.5vw',
      '3vw': '3vw',
      '3.5vw': '3.5vw',
      '5vw': '5vw',
      '5.5vw': '5.5vw',
      '10.5vw': '10.5vw',
      '12vw': '12vw',
    },
    minWidth: {
      '10vw': '10vw',
      '10px': '10px',
      '50px': '50px',
      '75px': '75px',
      '100px': '100px',
      '150px': '150px',
      '200px': '200px',
      '240px': '240px',
      '250px': '250px',
      '300px': '300px',
      '320px': '320px',
      '85%': '85%',
    },
    screens: {
      mobile: '0px',
      xs: '400px',
      tablet: '680px',
      new_md: '900px',
      desktop: '1440px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
