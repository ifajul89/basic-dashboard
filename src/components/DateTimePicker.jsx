import { CgCalendarDates } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

const DateTimePicker = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="join hidden md:block bg-white">
        <input
          className="join-item btn btn-sm bg-white hover:bg-gray-100 font-light border-0 checked:bg-gray-200"
          type="radio"
          aria-label="12 Months"
        />
        <input
          className="join-item btn btn-sm bg-white hover:bg-gray-100 font-light border-0"
          type="radio"
          aria-label="30 Days"
        />
        <input
          className="join-item btn btn-sm bg-white hover:bg-gray-100 font-light border-0"
          type="radio"
          aria-label="7 Days"
        />
        <input
          className="join-item btn btn-sm bg-white hover:bg-gray-100 font-light border-0"
          type="radio"
          aria-label="24 Hours"
        />
      </div>
      <details className="dropdown md:hidden">
        <summary className="btn btn-sm bg-white hover:bg-gray-100 font-light border-none">
          Pick Day
          <FaAngleDown />
        </summary>
        <ul className="menu dropdown-content bg-base-100 mt-1 rounded-xl font-light z-[1] w-max p-2 shadow">
          <li>
            <a>12 Months</a>
          </li>
          <li>
            <a>30 Days</a>
          </li>
          <li>
            <a>7 Days</a>
          </li>
          <li>
            <a>24 Hours</a>
          </li>
        </ul>
      </details>
      <button className="btn btn-sm bg-white hover:bg-gray-100 font-light border-none">
        <CgCalendarDates className="text-lg" />
        Custom Date
      </button>
    </div>
  );
};

export default DateTimePicker;
