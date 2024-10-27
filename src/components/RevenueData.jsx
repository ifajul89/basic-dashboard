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
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Revenue <span className="font-bold text-pink-600">600 AED</span>
        </h2>
      </div>

      <div className="w-full h-min">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="hour"
              tick={{ fill: "#6B7280" }}
              className="text-sm"
            />

            <YAxis
              tickFormatter={(value) => `AED ${value}`}
              className="text-sm"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#9B0042"
              strokeWidth={4}
              dot={{ r: 3, fill: "#9B0042" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
