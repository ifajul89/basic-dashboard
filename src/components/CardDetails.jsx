import EachCard from "./shared/EachCard";
import { RxAvatar } from "react-icons/rx";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlinePedalBike } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";
import { RiCoupon3Line } from "react-icons/ri";

const CardDetails = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
      <EachCard Icon={<RxAvatar />} Number="3310" Name="Total Customer" />
      <EachCard Icon={<FaRegNoteSticky />} Number="10223" Name="Total Orders" />
      <EachCard
        Icon={<FaRegNoteSticky />}
        Number="3000"
        Name="Completed Orders"
      />
      <EachCard
        Icon={<FaRegNoteSticky />}
        Number="240"
        Name="Cancelled Orders"
      />
      <EachCard
        Icon={<MdOutlineFastfood />}
        Number="1200"
        Name="Restaurant Partners"
      />
      <EachCard
        Icon={<MdOutlinePedalBike />}
        Number="3628"
        Name="Rider Partners"
      />
      <EachCard Icon={<RiEBike2Line />} Number="17263" Name="Approved Rider" />
      <EachCard
        Icon={<RiCoupon3Line />}
        Number="1393"
        Name="Coupons Available"
      />
    </div>
  );
};

export default CardDetails;
