import Banner1 from "../../../assets/Banner/Banner.jpg";
import apple from "../../../assets/image/apple.png";
const Banner = () => {
  return (
    <div className="md:px-14 py-9 md:py-0">
      <div className="flex justify-between  flex-col-reverse md:flex-row items-center h-full w-full">
        <div className="space-y-5">
          <div className="flex  items-center gap-5">
            <div>
              <img src={apple} alt="apple" />
            </div>
            <p>iPhone 14 Series</p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">
              Up to 10% <br /> off Voucher
            </h1>
          </div>
          <button className="btn btn-sm rounded-sm  bg-gray-500 hover:text-gray-700 text-white font-normal border-none">
            Shop Now
          </button>
        </div>
        <div className="w-80 h-full">
          <img className="w-full h-full mt-10" src={Banner1} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
