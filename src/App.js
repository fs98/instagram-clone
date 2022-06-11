import "./App.css";
import Layout from "./components/Layout/Layout";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function App() {
  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-4 border p-5">
            <Swiper
              spaceBetween={10}
              slidesPerView={7}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="text-center">
                <img
                  src="https://via.placeholder.com/140x140"
                  alt=""
                  className="rounded-full mx-auto"
                  height="80"
                  width="80"
                />
                <h6 className="text-xs mt-1">username</h6>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-span-2 p-5">
            <div className="flex justify-start items-center">
              <img
                src="https://via.placeholder.com/140x140"
                alt=""
                className="rounded-full flex-none"
                height="80"
                width="80"
              />
              <div className="ml-5">
                <a href="/">username</a>
                <p>Full Name</p>
              </div>
              <a href="/" className="mr-0 ml-auto text-blue-600 underline">
                Switch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default App;
