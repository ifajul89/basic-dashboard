import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

// Example data
const data = [
  { hour: "00hr", value: 0 },
  { hour: "02hr", value: 100 },
  { hour: "04hr", value: 200 },
  { hour: "06hr", value: 250 },
  { hour: "08hr", value: 300 },
  { hour: "10hr", value: 350 },
  { hour: "12hr", value: 400 },
  { hour: "14hr", value: 600 }, // Peak
  { hour: "16hr", value: 500 },
  { hour: "20hr", value: 550 },
  { hour: "22hr", value: 650 },
  { hour: "24hr", value: 700 },
];

const RevenueChart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="hour"
              tick={{ fill: "#6B7280" }}
              className="text-xs"
            />
            <YAxis
              tick={{ fill: "#6B7280" }}
              tickFormatter={(value) => `AED ${value}`}
              className="text-xs"
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#9B0042"
              strokeWidth={4}
              dot={{ r: 3, fill: "#9B0042" }} // Customize the dots at data points
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
