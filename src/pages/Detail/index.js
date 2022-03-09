import CheckInInput from "../../components/molecules/Search/Schedule/CheckIn"
import CheckOut from "../../components/molecules/Search/Schedule/CheckOut"
export default function Detail() {
  return (
    <div className="flex flex-col justify-center items-center py-24 bg-gray-100">
      <h2 className="text-3xl">Border Gateway</h2>
      <p><span>5.0 ⭐</span>8 reviews</p>
      <div className="flex w-5/6 gap-12">
        <div className="w-2/3 p-5">          
          <div>
            <img className="w-full rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlQzUZ68PlZkZFT9KQVpgGavTcy0ShWpljg&usqp=CAU" alt=""/>
            <p className="text-xl font-bold mt-4 mb-4">Entier renta unit hoste by Ghazal</p>
            <p className="mb-2"><span>2 guest - 1 bedroom - 1 bed - 1bath </span></p>
          </div>
          <hr />
          <div className="mt-3 mb-3">
            <div className="p-2"> 🏠 Entire home </div>
            <div className="p-2"> 🏠 Entire home </div>
            <div className="p-2"> 🏠 Entire home </div>
            <div className="p-2"> 🏠 Entire home </div>            
          </div>
          <hr />
          <div className="mt-7 mb-7">
            Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44. ...
          </div>
          <hr />
          <h3 className="text-xl font-bold mt-4 mb-4">¿Que ofrece el plan? </h3>
          <div className="flex">
            <div className="w-1/2">
              <p className="p-2">🌿 Jardin</p>
              <p className="p-2">📶 Internet</p>
              <p className="p-2">🍳 Cocina</p>          
            </div>
            <div className="w-1/2">
              <p className="p-2">🌿 Jardin</p>
              <p className="p-2">📶 Internet</p>
              <p className="p-2">🍳 Cocina</p>          
            </div>            
          </div>
          <hr/>
        </div>
      <div className="w-1/3">
        <div className=" shadow-xl mt-5 p-5 h-fit bg-white rounded-md ">
          <div className="flex justify-between p-2">
            <p className="font-bold">$75 / noche </p>
            <p>5.0 ⭐</p>

          </div>
          <div className="flex">
            <div className="w-1/2"> 
              <CheckInInput />
            </div>
            <div className="w-1/2">
              <CheckOut/>
              
            </div>
          </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <select class="form-select appearance-none
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Open this select menu</option>
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
          <p><span>5.0 ⭐</span>8 reviews</p>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between">
              <div className="flex mb-3">
                <img src="https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-detr%C3%A1s-del-retrato-de-la-Mona-Lisa-1280x720.jpg" alt="" className="rounded-full w-16"/>
                <div className="flex flex-col ml-3">
                  <p className="text-xs">Brenda Nahomi</p>
                  <span className="text-xs"> 16 de Abril </span>
                </div>
              </div>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <p className="mb-3">Un muy buen hotel, lo recomiendo pues la atencion es super buena, desde la atencion </p>
            <hr />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between">
              <div className="flex mb-3">
                <img src="https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-detr%C3%A1s-del-retrato-de-la-Mona-Lisa-1280x720.jpg" alt="" className="rounded-full w-16"/>
                <div className="flex flex-col ml-3">
                  <p className="text-xs">Brenda Nahomi</p>
                  <span className="text-xs"> 16 de Abril </span>
                </div>
              </div>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <p className="mb-3">Un muy buen hotel, lo recomiendo pues la atencion es super buena, desde la atencion </p>
            <hr />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between">
              <div className="flex mb-3">
                <img src="https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-detr%C3%A1s-del-retrato-de-la-Mona-Lisa-1280x720.jpg" alt="" className="rounded-full w-16"/>
                <div className="flex flex-col ml-3">
                  <p className="text-xs">Brenda Nahomi</p>
                  <span className="text-xs"> 16 de Abril </span>
                </div>
              </div>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <p className="mb-3">Un muy buen hotel, lo recomiendo pues la atencion es super buena, desde la atencion </p>
            <hr />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between">
              <div className="flex mb-3">
                <img src="https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-detr%C3%A1s-del-retrato-de-la-Mona-Lisa-1280x720.jpg" alt="" className="rounded-full w-16"/>
                <div className="flex flex-col ml-3">
                  <p className="text-xs">Brenda Nahomi</p>
                  <span className="text-xs"> 16 de Abril </span>
                </div>
              </div>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <p className="mb-3">Un muy buen hotel, lo recomiendo pues la atencion es super buena, desde la atencion </p>
            <hr />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between">
              <div className="flex mb-3">
                <img src="https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-detr%C3%A1s-del-retrato-de-la-Mona-Lisa-1280x720.jpg" alt="" className="rounded-full w-16"/>
                <div className="flex flex-col ml-3">
                  <p className="text-xs">Brenda Nahomi</p>
                  <span className="text-xs"> 16 de Abril </span>
                </div>
              </div>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <p className="mb-3">Un muy buen hotel, lo recomiendo pues la atencion es super buena, desde la atencion </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  )

}
