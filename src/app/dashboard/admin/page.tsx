import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard"
import FinanceChart from "@/components/FinanceChart";
import AttendenceChart from "@/components/AttendenceChart";
import EventCalendar from "@/components/EventCalendar";
const adminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'> 
    {/* // left  */}
    <div  className="w-full lg:w-2/3 flex flex-col gap-8">
{/* user cards */}
<div className="  flex  gap-4 flex-wrap   ">
  <UserCard type="student " col="yellow"/>
  <UserCard type="teacher" col="red"/>
  <UserCard type="parent" col="yellow"/>
  <UserCard type ="staff" col="red"/>
</div >
  {/* middle charts */}
<div className=" flex gap-4 flex-col lg:flex-row">
  {/* 1st count chart */}
  <div className="  w-full h-[450px] lg:w-1/3">
  <CountChart/>

  </div>
  {/* attendence chart */}
  <div className="w-full h-[450px] lg:w-2/3">
  <AttendenceChart/>

  </div>
  
</div>
{/* bottom charts */}
<div className="w-full h-[500px] ">
<FinanceChart/>

</div>
</div>
{/* right  */}
<div className="w-full lg:w-1/3 flex flex-col gap-8">

<EventCalendar/>
</div>
    </div>
    
  );
};

export default adminPage;