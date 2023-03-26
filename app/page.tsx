import Image from "next/image";
import { Inter } from "next/font/google";
import TopPriorities from "@/components/TopPriorities";
import TimeBox from "@/components/TimeBox";
import BrainDump from "@/components/BrainDump";
import Date from "@/components/Date";
import Hours from "@/components/Hours";
import TextInputs from "@/components/TextInputs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="columns-4 gap-4 flex m-4">
        <div className="flex flex-col w-full mt-9 items-center">
          <TimeBox />
          <TopPriorities />
          <BrainDump />
        </div>
        <div className="w-full mt-4">
          <Date />
          <Hours />
        </div>
      </div>
  );
}
