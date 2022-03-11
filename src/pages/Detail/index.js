import { useNavigate, useParams } from "react-router-dom";
import CheckInInput from "../../components/molecules/Search/Schedule/CheckIn";
import CheckOut from "../../components/molecules/Search/Schedule/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GiCheckeredDiamond } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";
import Loader from "../../components/atoms/Loader";
import { useEffect, useState } from "react";
import { getHotelInfo } from "../../store/slices/hotel";
import { createReview, getReviews } from "../../services/review";
// import CheckoutForm from "../../components/molecules/BuyForm/CheckoutForm";

export default function Detail() {
  const [reviews, setReviews] = useState([]);
  const [opinion, setOpinion] = useState("");
  const dispatch = useDispatch();
  const { hotelId } = useParams();
  const { checkin_date, checkout_date } = useSelector(
    (state) => state.SearchLocationReducer.data
  );
  useEffect(() => {
    dispatch(getHotelInfo({ hotelId, checkin_date, checkout_date }));
  }, [checkin_date, checkout_date, dispatch, hotelId]);

  useEffect(() => {
    getReviews(hotelId).then((review) => setReviews(review));
  }, [hotelId]);

  const { data: response, loading } = useSelector((state) => state.hotel.hotel);
  let {
    roomTypeNames = [],
    aboutUs = [],
    lugaresInteres = [],
    tagline,
    image,
    name,
    countryName,
    provinceName,
    addressLine1,
    starRating,
    price,
  } = response;

  const {
    user: { logged },
  } = useSelector((state) => state.user);

  image = image + "?impolicy=fcrop&w=900&h=450&q=high";
  const sendReview = async (e) => {
    e.preventDefault();
    if (!logged) {
      alert("registrese para opinar");
    } else {
      const body = {
        title: "10/40",
        summary: opinion,
        rating: 6,
      };
      const post = await createReview(hotelId, body);
      setReviews(reviews.concat(post.data.data));
      setOpinion("");
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col md:justify-center items-center py-20 bg-gray-100">
      <h2 className="text-3xl">{name}</h2>
      <p>
        <span>{"⭐".repeat(starRating)}</span>
      </p>
      <div className="w-full md:flex md:w-5/6 gap-12">
        <div className="md:w-2/3 p-5">
          <div>
            <img className="w-full rounded-2xl " src={`${image}`} alt="" />
            <p className="text-xl font-bold mt-4 mb-4">{tagline}</p>
            <p className="mb-2">
              <span>
                {countryName} - {provinceName} - {addressLine1}
              </span>
            </p>
          </div>
          <hr />
          <div className="mt-3 mb-3">
            {roomTypeNames.map((kind, index) => (
              <div key={index} className="flex  mb-1">
                <MdLocalHotel className="mr-3" />
                <p>{kind}</p>
              </div>
            ))}
          </div>
          <hr />

          <hr />
          <h3 className="text-xl font-bold mt-4 mb-4">
            👀 ¿Por qué elegirnos ?{" "}
          </h3>
          <div className="flex">
            <div className="w-full">
              {aboutUs.map((e, index) => (
                <div key={index} className="flex items-baseline mb-1">
                  <BsFillCheckSquareFill className="mr-3" />
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-2 mb-2" />
          <h3 className="text-xl font-bold mt-4 mb-4">
            🤙 Lugares de Interes{" "}
          </h3>
          <div className="flex">
            <div className="w-full">
              {lugaresInteres.map((e, index) => (
                <div key={index} className="flex items-baseline mb-1">
                  <GiCheckeredDiamond className="mr-3" />
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
        <div className="w-full p-3 md:w-1/3 md:p-0">
          <div className=" shadow-xl mt-5 p-5 h-fit bg-white rounded-md ">
            <div className="flex justify-between p-2">
              <p className="font-bold">$ {price} / noche </p>
              <span>{starRating} ⭐</span>
            </div>
            <div className="flex">
              <div className="w-full md:w-1/2">
                <CheckInInput className="bg-black opacity-50" />
              </div>
              <div className="w-full md:w-1/2">
                <CheckOut />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <select
                  className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="10">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            {/* <CheckoutForm /> */}
            <p className="text-center p-3 font-bold">Detalle de pago</p>
            <div className="flex justify-between p-1">
              <p>Cleaning fee</p>
              <p>$5.0</p>
            </div>
            <div className="flex justify-between p-1">
              <p>Cleaning fee</p>
              <p>$5.0</p>
            </div>
            <div className="flex justify-between p-1">
              <p>Cleaning fee</p>
              <p>$5.0</p>
            </div>
            <hr />
            <div className="flex justify-between p-2">
              <p>TOTAL</p>
              <p>$5000.0</p>
            </div>
          </div>
          <div className=" shadow-xl mt-5 p-5 h-fit bg-white rounded-md ">
            <div className="flex justify-between mt-3 mb-3">
              <p className="text-xl font-bold">Reviews</p>
              <p>
                <span> 😀</span>
                {reviews.length} reviews
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex flex-col">
                <p className="text-md font-bold mb-2">
                  Dejanos saber tu opinión
                </p>
                <textarea
                  className="border-2"
                  rows="6"
                  cols="15"
                  name="opinion"
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                />
                <button className="button m-2 self-end" onClick={sendReview}>
                  Enviar
                </button>
              </div>
            </div>
            {/* componente review */}
            {reviews.map((user) => {
              let formatDate = new Date(user.createdAt);
              let fecha = formatDate
                .toString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let rating = user.rating / 2;
              return (
                <div className="flex flex-col mb-4" key={user._id}>
                  <div className="flex justify-between">
                    <div className="flex mb-3">
                      <img
                        src={user.user.img}
                        alt=""
                        className="rounded-full w-16"
                      />
                      <div className="flex flex-col ml-3">
                        <p className="text-xs">{user.user.firstname}</p>
                        <span className="text-xs"> {fecha} </span>
                      </div>
                    </div>
                    <p>{"⭐".repeat(rating)}</p>
                  </div>
                  <p className="mb-3">{user.summary}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
