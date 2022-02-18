module.exports = {
  content: [
    "./src/**/*.{html,js}",
    
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/App/*.{js,jsx}"
],
  theme: {
    extend: {
      colors: {
        search: '#91CB82',
        details: '#E7E7F2'
      },
      backgroundImage: theme => ({
        'foto': "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/b2/ea/getlstd-property-photo.jpg?w=600&h=300&s=1')",
        "hero-image": 'url("./Img-fondo-main/nathalie-buss-HYST-KUIu-s-unsplash.jpg")',
        "background-register": 'url("")',
        "background-login": 'url("https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/20/08/2008427_v4.jpeg")',
        "logo":'url("https://res.cloudinary.com/dhlbsrd5k/image/upload/v1644619719/WhatsApp_Image_2022-02-11_at_5.39.23_PM_bcrws4.jpg")'
      })
    },
    fontFamily: {
      'sans': ['Inter'],
      Buda: ['Buda', 'cursive'],
      Kaushan: ['Kaushan Script', 'cursive']

    }
  },
  plugins: [],
}
