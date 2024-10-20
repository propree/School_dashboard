import Image from "next/image"

const UserCard=({type,col}:{type:string; col:string })=>{
    return (
        
            <div className={`rounded-2xl p-4 ${col=="yellow"? 'bg-yellow-200 ':'bg-purple-200' }   min-w-[130px] flex-auto justify-between
            `}>
            <div className="flex justify-between items-center">
                <span className=" text-[10px] bg-white px-2 py-1 rounded-full text-green-400">2024/24</span>
                <Image src="/more.png " alt="" width={20} height={20} />

                          </div>
                          
            <h1 className="text-2xl font-semibold my-4">1,234</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
        
    )
}
export default UserCard