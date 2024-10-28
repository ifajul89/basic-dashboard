import { CgSearch } from "react-icons/cg";
import { PiBellSimpleBold } from "react-icons/pi";
import { BiMessageSquareDetail } from "react-icons/bi";
import ProfileImage from "../assets/profile-image.jpg";

const SearchBox = () => {
  return (
    <div className="border bg-white border-gray-200 text-gray-500 rounded-xl flex items-center justify-between px-2 md:px-4 py-2 md:py-3 gap-1 sm:gap-2 md:gap-3">
      <CgSearch className="text-gray-400 min-w-4 text-2xl" />
      <input
        type="text"
        className="flex-1 outline-none py-1 md:py-3"
        placeholder="Search here..."
      />
      <PiBellSimpleBold className="min-w-4 text-lg" />
      <BiMessageSquareDetail className="min-w-4 text-lg" />
      <div className="divider divider-horizontal m-0"></div>
      <div className="hidden md:flex items-center gap-2">
        <div className="w-max">
          <h4 className="text-gray-500">Nazmul Rony</h4>
          <h5>Super Admin</h5>
        </div>
        <img
          className="w-11 rounded-full border border-gray-200"
          src={ProfileImage}
          alt="Profile Image"
        />
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button">
          <img
            className="w-11 min-w-9 rounded-full border border-gray-200"
            src={ProfileImage}
            alt="Profile Image"
          />
        </div>
        <div
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-lg mt-1 shadow z-[1] p-2"
        >
          <div className="w-max">
            <h4 className="text-gray-500">Nazmul Rony</h4>
            <h5>Super Admin</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
