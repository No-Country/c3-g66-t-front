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
        "hero-image": 'url("./img-fondo-main/nathalie-buss-HYST-KUIu-s-unsplash.jpg")'  
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
