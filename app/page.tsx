import Image from "next/image";
import { Inter } from "next/font/google";
import TopPriorities from "@/components/TopPriorities";
import TimeBox from "@/components/TimeBox";
import BrainDump from "@/components/BrainDump";
import Date from "@/components/Date";
import Hours from "@/components/Hours";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="flex justify-between">
        <div className="w-1/2">
          <TimeBox />
          <TopPriorities />
          <BrainDump />
        </div>
        <div className="w-1/2">
          <Date />
          <Hours />
        </div>
      </div>
  );
}
