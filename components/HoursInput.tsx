import React from "react";

export default function HoursInput({ hour }: any) {
  return (
    <div className="flex">
      <span className="border-2 border-r-0 border-slate-800 text-gray-900 text-sm rounded-x-xl block w-1/5 p-2.5">
        {hour}
      </span>
      <input
        type="text"
        id="top1"
        className="border-2 border-slate-800 text-gray-900 text-sm block w-2/5 p-2.5"
        required
      />
      <input
        type="text"
        id="top1"
        className="border-2 border-l-0 border-slate-800 text-gray-900 text-sm block w-2/5 p-2.5"
        required
      />
    </div>
  );
}
