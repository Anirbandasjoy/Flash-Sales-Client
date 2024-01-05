import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type SwiperNavButtonProps = {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
};

const SwiperNavButton: React.FC<SwiperNavButtonProps> = ({
  onPrev,
  onNext,
  isPrevDisabled = false,
  isNextDisabled = false,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div
          className={`${
            isPrevDisabled
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-500 text-gray-400 cursor-pointer"
          } sm:w-9 sm:h-9 w-7 h-7 flex justify-center items-center rounded-sm border sm:border-2 border-gray-400 duration-200 font-bold`}
          onClick={!isPrevDisabled ? onPrev : undefined}
        >
          <IoIosArrowDropleft className="text-xl sm:text-2xl" />
        </div>
        <div
          className={`${
            isNextDisabled
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-500 text-gray-400 cursor-pointer"
          } sm:w-9 sm:h-9 w-7 h-7 flex justify-center items-center rounded-sm border sm:border-2 border-gray-400 duration-200 font-bold`}
          onClick={!isNextDisabled ? onNext : undefined}
        >
          <IoIosArrowDropright className="text-xl sm:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SwiperNavButton;
