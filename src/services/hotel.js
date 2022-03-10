import axios from "axios";
const hotelDataService = async ({ hotelId, checkin_date, checkout_date }) => {
  const apiURL = `https://nc-hotely.herokuapp.com/api/v1/hotel/details?hotel_id=${hotelId}&checkin_date=${checkin_date}&checkout_date=${checkout_date}`;
  const response = await axios.get(apiURL);
  const all = await response.data;
  let {
    name,
    address: { countryName, provinceName, addressLine1 },
    starRating,
    featuredPrice: {
      currentPrice: { plain: price },
    },
    roomTypeNames = [],
    overview,
    tagline,
  } = all.data;
  let aboutUs;
  let lugaresInteres;
  if (Object.keys(overview).length > 0) {
    aboutUs = overview.overviewSections[0].content;
    lugaresInteres = overview.overviewSections.filter(
      (e) => e.type === "LOCATION_SECTION"
    )[0].content;
  } else {
    aboutUs = [];
    lugaresInteres = [];
  }
  const apiImage = `https://nc-hotely.herokuapp.com/api/v1/hotel/photos?hotel_id=${hotelId}`;
  const responseImage = await axios.get(apiImage);
  const { data: dataImage } = await responseImage.data;
  const image = dataImage[0].image_url;
  tagline = tagline[0].slice(3, -4);
  return {
    tagline,
    image,
    name,
    countryName,
    roomTypeNames,
    aboutUs,
    lugaresInteres,
    provinceName,
    addressLine1,
    starRating,
    price,
  };
};
export { hotelDataService };
