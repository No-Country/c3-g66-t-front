import axios from "axios";
import authHeader from "./auth-header";

const getReviews = async (hotelId) => {
  const response = await axios.get(
    `https://nc-hotely.herokuapp.com/api/v1/hotel/localreviews/?hotel_id=${hotelId}`
  );
  const { data } = await response.data;
  return data;
};
const createReview = (hotelId, body) => {
  return axios.post(
    `https://nc-hotely.herokuapp.com/api/v1/hotel/localreviews/?hotel_id=${hotelId}`,
    body,
    { headers: { Authorization: `Bearer ` + authHeader() } }
  );
};
export { getReviews, createReview };
