import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full h-[50vh] md:h-[70vh] lg:h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {/* First Slide with Clinic Name Overlay */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/Banner_img/img1.jpg"
              alt="Clinic Banner"
              className="w-full h-full object-cover"
            />
            {/* Overlay with Clinic Name */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white text-center p-6">
              <img src="../public/lg.png" alt="" />
              <h1 className="text-4xl md:text-6xl font-bold">Dexterity Physiotherapy & Fitness Clinic</h1>
              <p className="text-lg md:text-2xl mt-2 text-sky-400">" Movement Is Medicine "</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Other Slides */}
        <SwiperSlide>
          <img src="/Banner_img/img2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Banner_img/img3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Banner_img/img4.jpg" alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
