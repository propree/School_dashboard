"use client"
import Sidebar from "./sidebar";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* left part */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
        {/* this is the leftmost logo */}
        <Link href="/" className="flex justify-center items-center lg:justify-start gap2">
          <Image className=" space-x-2" width={44} height={44} src="/logo.png" alt="logo" />
          <span className="  hidden lg:block gap-2 py-2">NSC School</span>
        </Link>
        <Menu/>
      </div>

      {/* right part */}
      <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
