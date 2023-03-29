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
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <form className="columns-4 gap-4 flex m-4 font-roboto max-w-3xl select-none xl:mx-auto">
        <div className="flex flex-col w-1/3 mt-9 items-center md:w-1/2">
          <TimeBox />
          <TopPriorities />
          <BrainDump />
          <Buttons />
        </div>
        <div className="w-2/3 mt-4 md:w-1/2">
          <Date />
          <div className="font-semibold flex justify-around ml-8">
            <span>:00</span>
            <span>:30</span>
          </div>
          <Hours />
        </div>
      </form>
      <Footer />
    </div>
  );
}
