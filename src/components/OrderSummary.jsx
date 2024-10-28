import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Active", value: 384, percentage: 43, color: "#4CAF50" },
  { name: "Pending", value: 125, percentage: 20, color: "#2196F3" },
  { name: "Refunded", value: 234, percentage: 37, color: "#FFC107" },
  { name: "Cancelled", value: 234, percentage: 37, color: "#F44336" },
];

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];

const OrderSummary = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
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

      <div className="w-full md:w-1/2">
        {data.map((entry) => (
          <div key={entry.name} className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center mb-1">
                <span className="text-gray-700 font-medium">{entry.name}</span>
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
  );
};

export default OrderSummary;