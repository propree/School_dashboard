 import Image from "next/image";
 const Navbar = () => {
   return (
     <div className='flex items-center justify-between p-4'>
{/* search bar */}
<div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3">
  <Image src="/search.png " alt="preetesh's search icon" width={14} height={14}></Image>
  <input type="text"  placeholder="Search..." className="w-200 p-2 bg-transparent outline-none"/>

</div>

{/* icons and users */}
<div className=" flex items-center gap-6 justify-end w-full ">
  <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer ">
    <Image src="/message.png" alt="" width={20} height={20}/>
  </div>
  <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
    {/* this is for the announcement  */}
    <Image src="/announcement.png" alt="" width={20} height={20}/>
    <div className= " absolute -top-3 -right-1 w-5 h-5  bg-purple-500 text-white flex justify-center items-center rounded-full text-xs" >2
      {/* this is for the notifoication badge */}
    </div>
  </div>
  <div className="flex flex-col">
    <span className="text-xs leading-3 font-medium ">Preetesh</span>
    <span className="text-[10px] text-gray-500 text-right">Admin</span>

  </div>
  <Image alt="" src="/avatar.png" width={35} height={35} className="rounded-full"/>

</div>




     </div>
   );
 };
 
 export default Navbar;