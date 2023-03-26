import React from "react";

export default function TopPriorities() {
  const tops = [1, 2, 3];
  return (
    <div className="mt-8">
      <span className="font-semibold">Top Priorities</span>
      <div className="mt-2">
        <input
          type="text"
          id="top1"
          className="border-x-2 border-t-2 border-slate-800 text-gray-900 text-sm rounded-t-md block w-full p-2.5"
          required
        />
        <input
          type="text"
          id="top1"
          className="border-2 border-slate-800 text-gray-900 text-sm block w-full p-2.5"
          required
        />
        <input
          type="text"
          id="top1"
          className="border-x-2 border-b-2 border-slate-800 text-gray-900 text-sm rounded-b-md block w-full p-2.5"
          required
        />
      </div>
    </div>
  );
}
