import { useNavigate, useParams } from "react-router-dom";
import CheckInInput from "../../components/molecules/Search/Schedule/CheckIn";
import CheckOut from "../../components/molecules/Search/Schedule/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GiCheckeredDiamond } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";
import Loader from "../../components/atoms/Loader";
import { useEffect } from "react";

export default function Detail() {
  const navigate = useNavigate();
  const { checkin_date, checkout_date } = useSelector(
    (state) => state.SearchLocationReducer.data
  );
  let { hotelId } = useParams();

  const { hotelsList } = useSelector((state) => state.SearchHotelListReducer);
  const { data: response, loading } = useSelector((state) => state.hotel.hotel);
  const { roomTypeNames, aboutUs, lugaresInteres, tagline } = response;

  let {
    thumbnailUrl: { srpDesktop },
    name,
    address,
    starRating,
    ratePlan: { price },
  } = hotelsList.filter((e) => +e.hotel_id === +hotelId)[0];
  const newImage = srpDesktop.split("&").slice(0, -3).join("&");
  useEffect(() => {
    if (hotelsList.length === 0) {
      navigate("/");
    }
  }, [navigate, hotelsList]);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col justify-center items-center py-20 bg-gray-100">
      <h2 className="text-3xl">{name}</h2>
      <p>
        <span>{"⭐".repeat(starRating)}</span>
      </p>
      <div className="flex w-5/6 gap-12">
        <div className="w-2/3 p-5">
          <div>
            <img className="w-full rounded-2xl" src={`${newImage}`} alt="" />
            <p className="text-xl font-bold mt-4 mb-4">
              {tagline[0].slice(3, -4)}
            </p>
            <p className="mb-2">
              <span>
                {address.countryName}-{address.locality}-{address.streetAddress}
              </span>
            </p>
          </div>
          <hr />
          <div className="mt-3 mb-3">
            {roomTypeNames.map((kind) => (
              <div key={kind} className="flex text-center mb-1">
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
              {aboutUs.map((e) => (
                <div key={e} className="flex items-baseline mb-1">
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
              {lugaresInteres.map((e) => (
                <div key={e} className="flex items-baseline mb-1">
                  <GiCheckeredDiamond className="mr-3" />
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
        <div className="w-1/3">
          <div className=" shadow-xl mt-5 p-5 h-fit bg-white rounded-md ">
            <div className="flex justify-between p-2">
              <p className="font-bold">$ {price.current} / noche </p>
              <span>{starRating} ⭐</span>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <CheckInInput className="bg-black opacity-50" />
              </div>
              <div className="w-1/2">
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
            <button className="button min-w-full mt-2">Reservar</button>
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
                <span> 😀</span>1 reviews
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex flex-col">
                <p className="text-md font-bold mb-2">
                  Dejanos saber tu opinión
                </p>
                <textarea className="border-2" rows="6" cols="15" />
                <button className="button m-2 self-end">Enviar</button>
              </div>
            </div>
            {/* componente review */}

            <div className="flex flex-col mb-4">
              <div className="flex justify-between">
                <div className="flex mb-3">
                  <img
                    src="https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-detr%C3%A1s-del-retrato-de-la-Mona-Lisa-1280x720.jpg"
                    alt=""
                    className="rounded-full w-16"
                  />
                  <div className="flex flex-col ml-3">
                    <p className="text-xs">Brenda Nahomi</p>
                    <span className="text-xs"> 16 de Abril </span>
                  </div>
                </div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <p className="mb-3">
                Un muy buen hotel, lo recomiendo pues la atencion es super buena
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
