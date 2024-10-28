import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";

const data = [
  { name: "Active", value: 384, percentage: 43, color: "#4CAF50" },
  { name: "Pending", value: 125, percentage: 20, color: "#2196F3" },
  { name: "Refunded", value: 234, percentage: 37, color: "#FFC107" },
  { name: "Cancelled", value: 234, percentage: 37, color: "#F44336" },
];

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];

const OrderSummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h5>
          Revenue <span className="text-lg">600 AED</span>
        </h5>
        <HiOutlineDotsVertical className="text-lg" />
      </div>
      <hr className="my-3" />
      <div className="bg-pink-100 text-pink-800 flex items-center justify-between p-4 rounded-xl">
        <div className="flex items-center gap-1">
          <MdOutlineShoppingBag className="text-2xl" />
          <h6 className="text-xs sm:text-base">{data[1].value} new orders!</h6>
        </div>
        <button className="btn btn-sm bg-white hover:bg-gray-50 font-light text-pink-800 border-none">
          Manage Orders
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 my-5 gap-2 md:gap-5">
        {data.map((box) => (
          <div className="border border-gray-200 rounded-lg p-2 md:p-3 leading-4">
            <h6 className="md:text-3xl">{box.value}</h6>
            <p className="text-gray-400 font-light text-xs">{box.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 justify-between">
        <div className="w-full lg:w-1/2">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="percentage"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-1/2">
          {data.map((entry) => (
            <div key={entry.name} className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center mb-1">
                  <span className="text-gray-700 font-medium">
                    {entry.name}
                  </span>
                  <span className="ml-1 text-gray-500">
                    ({entry.percentage}%)
                  </span>
                </div>
                <span className="text-gray-500">{entry.value}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${entry.percentage}%`,
                    backgroundColor: entry.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
