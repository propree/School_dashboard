"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'jan',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'jan',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'jan',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'jan',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'jan',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'jan',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'jan',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'jan',
    income: 3490,
    expense: 4300,
  },
];
const FinanceChart = () => {
  return (
    
    <div className='bg-white rounded-lg p-4 h-full'>
    <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20}/>
    </div>
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
          align='center'
          verticalAlign="top"
          wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}
          />
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>    
    </div>
    
  );
};


export default FinanceChart;