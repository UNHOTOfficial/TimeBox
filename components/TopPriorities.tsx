import React from "react";

export default function TopPriorities() {
  return (
    <div>
      <span className="font-semibold mb-3">Top Priorities</span>
      <input
        type="text"
        id="top1"
        className="border-x-2 border-t-2 border-slate-800 text-gray-900 text-sm rounded-t-xl block w-full p-2.5"
        placeholder="First Priority"
        required
      />
      <input
        type="text"
        id="top1"
        className="border-2 border-slate-800 text-gray-900 text-sm block w-full p-2.5"
        placeholder="First Priority"
        required
      />
      <input
        type="text"
        id="top1"
        className="border-x-2 border-b-2 border-slate-800 text-gray-900 text-sm rounded-b-xl block w-full p-2.5"
        placeholder="First Priority"
        required
      />
    </div>
  );
}
