import { CgSearch } from "react-icons/cg";
import { PiBellSimpleBold } from "react-icons/pi";
import { BiMessageSquareDetail } from "react-icons/bi";
import ProfileImage from "../assets/profile-image.jpg";

const SearchBox = () => {
  return (
    <div className="border bg-white border-gray-200 text-gray-400 rounded-xl flex items-center justify-between px-4 py-3 gap-3">
      <CgSearch className="text-2xl" />
      <input
        type="text"
        className="flex-1 outline-none py-3"
        placeholder="Search here..."
      />
      <PiBellSimpleBold className="text-lg" />
      <BiMessageSquareDetail className="text-lg" />
      <div className="divider divider-horizontal m-0"></div>
      <div className="flex items-center gap-2">
        <div className="w-max">
          <h4 className="text-gray-500">Nazmul Rony</h4>
          <h5>Super Admin</h5>
        </div>
        <img className="w-11 rounded-full border border-gray-200" src={ProfileImage} alt="Profile Image" />
      </div>
    </div>
  );
};

export default SearchBox;
