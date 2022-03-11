import { Link } from "react-router-dom";

function HotelCard({ title, city, country, mainImg, id: hotelId, price }) {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { checkin_date, checkout_date } = useSelector(
  //   (state) => state.SearchLocationReducer.data
  // );
  // const handleClick = () => {
  //   dispatch(getHotelInfo({ hotelId, checkin_date, checkout_date }));
  //   navigate(`/hotels/${hotelId}`);
  // };
  return (
    <div className="group h-80 bg-withe-700 flex flex-wrap rounded-lg shadow-xl relative overflow-hidden  flex-row transform hover:scale-125 transition-all">
    <a className="contents" href="http://">
        <img className="relative w-full sm:max-w-xs sm:max-h-full max-h-48 object-cover" src={mainImg} alt="Img-hoteles" />
    </a>
    <div className="relative flex flex-col p-4 justify-items-center w-full h-full">
        <h1 className="text-lg mb-2 m-1 text-black">{title}</h1>
        <div className="small mb-2">
          <p className="text-slate-400">
            {city}, {country}
          </p>
        </div>

        <ul className="flex flex-col justify-items-center md:justify-items-start mt-8">
          <li className="inline-block px-4 py-1 bg-green-400 mr-2 cursor-default mb-1 rounded-lg w-full">
            ${price}
          </li>
          {/* <button
            className="px-1 py-1 m-2 text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
            onClick={handleClick}
          >
            {" "}
            Ver detalles
          </button> */}
          <Link
            to={`/hotels/${hotelId}`}
            className="px-1 py-1 m-2 text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Ver detalle
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default HotelCard;
