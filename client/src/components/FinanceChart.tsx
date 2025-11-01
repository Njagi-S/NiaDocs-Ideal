"use client"

import Image from "next/image";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 4200,
    expense: 7800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "June",
    income: 2390,
    expense: 3800,
  },
  {
    name: "July",
    income: 4390,
    expense: 5770,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 8700,
  },
  {
    name: "Oct",
    income: 6000,
    expense: 5600,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 7300,
  },
  {
    name: "Dec",
    income: 6790,
    expense: 2340,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Finance</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart width={500} height={300} data={data} margin={{top:5,right:30, left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                <Tooltip />
                <Legend align ="center" verticalAlign="top" wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}}/>
                <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={3}/>
                <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;