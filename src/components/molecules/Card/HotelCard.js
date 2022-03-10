import { AiTwotoneEnvironment } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { VscTriangleRight } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { getHotelInfo } from "../../../store/slices/hotel";
function HotelCard({ title, city, country, mainImg, id: hotelId, price }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkin_date, checkout_date } = useSelector(
    (state) => state.SearchLocationReducer.data
  );
  const handleClick = () => {
    dispatch(getHotelInfo({ hotelId, checkin_date, checkout_date }));
    navigate(`/hotels/${hotelId}`);
  };
  return (
    <div className="group bg-withe-700 flex flex-wrap sm:flex-inherit rounded-lg shadow-xl relative overflow-hidden mb-8 flex-row transform hover:scale-125 transition-all">
      <a className="contents" href="http://">
        <img
          className="relative w-full sm:max-w-xs sm:max-h-full max-h-48 object-cover"
          src={mainImg}
          alt="Img-hoteles"
        />
      </a>
      <div className="relative flex flex-col p-4">
        <h1 className="text-3xl mb-2 text-black">{title}</h1>
        <div className="small mb-2">
          <p className="text-slate-400">{city}</p>
        </div>
        <div className="w-0 group-hover:w-48 h-1 rounded bg-green-400 duration-150"></div>
        <div className="flex items-center">
          <VscTriangleRight className="text-slate-200" />
          <button
            className="px-1 text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
            onClick={handleClick}
          >
            {" "}
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
export default HotelCard;
