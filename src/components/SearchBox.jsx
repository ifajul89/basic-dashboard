import { CgSearch } from "react-icons/cg";
import { PiBellSimpleBold } from "react-icons/pi";
import { BiMessageSquareDetail } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div className="border bg-white border-gray-200 text-gray-400 rounded-xl flex items-center p-4 gap-2">
      <CgSearch className="text-2xl" />
      <input type="text" className="w-full outline-none" placeholder="Search here..." />
      <PiBellSimpleBold />
      <BiMessageSquareDetail />
      <div className="h-full w-1 bg-gray-500"></div>
    </div>
  );
};

export default SearchBox;
