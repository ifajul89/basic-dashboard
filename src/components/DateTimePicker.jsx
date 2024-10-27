import { CgCalendarDates } from "react-icons/cg";

const DateTimePicker = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="join bg-white">
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
      <button className="btn btn-sm bg-white hover:bg-gray-100 font-light border-none">
      <CgCalendarDates className="text-lg" />
      Custom Date
      </button>
    </div>
  );
};

export default DateTimePicker;
