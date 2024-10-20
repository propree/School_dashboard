"use client";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import  Calendar from "react-calendar";
import Image from 'next/image';
type ValuePiece=Date | null;
type Value =ValuePiece | [ValuePiece,ValuePiece];
// TEMPORARY
const events =[
{
  id: 1,
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},
{ id: 2,
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  

},
{ id: 3,
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",



},
]; 
 

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
<div className="bg-white rounded-md p-4"> 
  <Calendar onChange={onchange} value={value}/>
  <div className='flex items-center justify-between'>
    <h1 className='text-xl font-semibold my-4'>Events</h1>
      <Image src="/moreDark.png" alt="" width={20} height={20}/>
  </div>
    <div className='flex flex-col gap-4'>
      {
        events.map(event=>
        (
          <div 
          className='p-5 rounded-md border-2 border-gray-200 border ' key={event.id}>
            <div className='flex items-center justify-between'>
              <h1>{event.title}</h1>
              <span>{event.time}</span>

            </div>
            <p>{event.description}</p>

          </div>
        )
        )
      }
    </div>
</div>  );
};

export default EventCalendar;