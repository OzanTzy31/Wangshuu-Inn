import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "/src/assets/img/room.jpg";
import slide_image_2 from "/src/assets/img/room.jpg";
import slide_image_3 from "/src/assets/img/room.jpg";
import slide_image_4 from "/src/assets/img/room.jpg";
import slide_image_5 from "/src/assets/img/room.jpg";

const ImageSlider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
