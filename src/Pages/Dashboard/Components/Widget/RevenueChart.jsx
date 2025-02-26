import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Button from "react-bootstrap/Button";

const data = {
  day: [
    { name: "12AM", profit: 20 },
    { name: "3AM", profit: 50 },
    { name: "6AM", profit: 80 },
    { name: "9AM", profit: 40 },
    { name: "12PM", profit: 90 },
    { name: "3PM", profit: 60 },
    { name: "6PM", profit: 100 },
    { name: "9PM", profit: 70 },
  ],
  week: [
    { name: "Mon", profit: 200 },
    { name: "Tue", profit: 450 },
    { name: "Wed", profit: 300 },
    { name: "Thu", profit: 500 },
    { name: "Fri", profit: 700 },
    { name: "Sat", profit: 600 },
    { name: "Sun", profit: 800 },
  ],
  month: [
    { name: "Jan", profit: 1000 },
    { name: "Feb", profit: 1200 },
    { name: "Mar", profit: 1400 },
    { name: "Apr", profit: 1100 },
    { name: "May", profit: 1300 },
    { name: "Jun", profit: 900 },
    { name: "Jul", profit: 1600 },
    { name: "Aug", profit: 1000 },
    { name: "Sep", profit: 1200 },
    { name: "Oct", profit: 1250 },
  ],
};

const RevenueChart = () => {
  const [timeframe, setTimeframe] = useState("day");

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-semibold">Revenue Statistics</h5>
        <div className="space-x-2">
          <Button
            variant={timeframe === "month" ? "default" : "outline"}
            onClick={() => setTimeframe("month")}
          >
            Month
          </Button>
          <Button
            variant={timeframe === "week" ? "default" : "outline"}
            onClick={() => setTimeframe("week")}
          >
            Week
          </Button>
          <Button
            variant={timeframe === "day" ? "default" : "outline"}
            onClick={() => setTimeframe("day")}
          >
            Day
          </Button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data[timeframe]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{
              value: "Income / Loss",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={{ stroke: "#f59e0b", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
