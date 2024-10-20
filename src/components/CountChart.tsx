"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
      name: 'Total',
      count:106,
      fill: 'white',
    },
 
  {
    name: 'Girls',
    count: 50,
   
    fill: '#FDE68A',
  },
  {
    name: 'Boys',
    count: 55,
    
    fill: '#7DD3FC',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
const CountChart = () => {
  return (
    <div className=' bg-white w-full h-full rounded-2xl p-2'>
        {/* this is for the title */}
        <div className='flex items-center justify-between '>
            <h1 className='text-lg font-semibold '>Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>

        </div>
        {/* this is for the chart  */}
        <div className=' relative  w-full h-[75%]'>
        <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar

            background
        
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" height={50} width={50} 
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
        {/* this is for the bottom */}
        <div className='flex justify-center gap-16  '>
            <div className='flex flex-col items-center '>
                <div className='bg-blue-300 w-5 h-5 rounded-full '></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-500 '>Boys <span className='text-green-500'>(55%)</span></h2>
                
            </div>
            <div className='flex flex-col  items-center'>
                <div className='bg-yellow-200 h-5 w-5 rounded-full'></div>
                    <h1 className='font-bold'>1,009</h1>
                    <h2 className='text-xs text-gray-500 '>Girls <span className='text-red-500'>(45%)</span></h2>
                
            </div>
        </div>
        
    </div>
  );
};

export default CountChart;