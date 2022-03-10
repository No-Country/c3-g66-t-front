import axios from "axios";
const hotelDataService = async ({ hotelId, checkin_date, checkout_date }) => {
  const apiURL = `https://nc-hotely.herokuapp.com/api/v1/hotel/details?hotel_id=${hotelId}&checkin_date=${checkin_date}&checkout_date=${checkout_date}`;
  const response = await axios.get(apiURL);
  const all = await response.data;
  const { roomTypeNames, overview, tagline } = all.data;
  const aboutUs = overview.overviewSections[0].content;
  const lugaresInteres = overview.overviewSections.filter(
    (e) => e.type === "LOCATION_SECTION"
  )[0].content;
  console.log("me muero");
  console.log(roomTypeNames, aboutUs, lugaresInteres);
  return { roomTypeNames, aboutUs, lugaresInteres, tagline };
};

export { hotelDataService };
