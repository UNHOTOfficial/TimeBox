import Image from "next/image";
import { Inter } from "next/font/google";
import TopPriorities from "@/components/TopPriorities";
import TimeBox from "@/components/TimeBox";
import BrainDump from "@/components/BrainDump";
import Date from "@/components/Date";
import Hours from "@/components/Hours";
import TextInputs from "@/components/TextInputs";
import Buttons from "@/components/Buttons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <form className="columns-4 gap-4 flex m-4 font-roboto max-w-xl xl:mx-auto">
      <div className="flex flex-col w-full mt-9 items-center">
        <TimeBox />
        <TopPriorities />
        <BrainDump />
        <Buttons />
      </div>
      <div className="w-full mt-4">
        <Date />
        <div className="font-semibold flex justify-around ml-8">
          <span>:00</span>
          <span>:30</span>
        </div>
        <Hours />
      </div>
    </form>
      <Footer/>
    </div>
  );
}
