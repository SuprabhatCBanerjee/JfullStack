import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Task: 4000 },
  { name: "Feb", Task: 3000 },
  { name: "Mar", Task: 2000 },
  { name: "Apr", Task: 2780 },
  { name: "May", Task: 1890 },
  { name: "Jun", Task: 2390 },
];

const Progress = () => {
  return (
    <>
    <div style={styles.wrapper}>
        <h2 className="text-xl font-bold">Progress</h2>
    <div className="flex">
      <BarChart
        width={600}
        height={280}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Task" fill="#8884d8" />
      </BarChart>
    </div>
    </div>
    </>
  );
};

export default Progress;

const styles = {
    wrapper:{
        width:"52%",
        position:"relative",
        padding: "0",
        // background: "green",
    }
};
