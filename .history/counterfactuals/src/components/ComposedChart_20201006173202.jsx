import React, {PureComponent} from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ComposedChart = ({data}) => {
  console.log(data);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {data.map((obj) => {
        const keys = Object.keys(obj);
        keys.forEach(key=>)
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />;
      })}

      <Bar dataKey="uv" fill="#ffc658" />
    </BarChart>
  );
};

export default ComposedChart;
