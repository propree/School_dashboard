"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
  {
    name: 'Sun',
    present: 45,
    absent: 78,
  },
  {
    name: 'Mon',
    present: 30,
    absent: 13,
  },
  {
    name: 'Tue',
    present: 20,
    absent: 98,
  },
  {
    name: 'Wed',
    present: 77,
    absent: 39,
  },
  {
    name: 'Thu',
    present: 88,
    absent: 48,
  },
  {
    name: 'Fri',
    present: 63,
    absent: 38,
  },
  
];







const AttendenceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt="" height={20} width={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis />
          <Tooltip />
          <Legend
          align='left'
          verticalAlign="top"
          wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}
          />
          <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="gold" stroke="purple" /> } legendType='circle' radius={[10,11,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;