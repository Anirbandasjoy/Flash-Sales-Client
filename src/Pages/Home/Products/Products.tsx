import useGetProducts from "../../../hookes/useGetProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Product.module.css";
import { Pagination } from "swiper/modules";
import SwiperNavButton from "../../../Components/SwiperNavButton/SwiperNavButton";
import { useEffect, useRef, useState } from "react";

const Products = () => {
  const { data } = useGetProducts();

  const SlideRef = useRef<Swiper | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handlePrev = () => {
    SlideRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    SlideRef.current?.swiper.slideNext();
  };

  useEffect(() => {
    const swiperInstance = SlideRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, []);
  return (
    <div className="mt-40 mb-20">
      <div className="mb-10 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold">Flash Sales</h1>
        <SwiperNavButton
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={isBeginning}
          isNextDisabled={isEnd}
        />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        ref={SlideRef}
      >
        {data?.products.map((product) => {
          return (
            <SwiperSlide key={product.id} className="mx-5 ">
              <div className="p-4 bg-gray-100">
                <div className="w-full md:h-[20rem] h-[3.7rem]">
                  <img
                    className="w-full h-full"
                    src={product.thumbnail}
                    alt="thumbnail"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Products;
