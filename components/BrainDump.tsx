import React from "react";

export default function BrainDump() {
  return (
    <div>
      <span className="font-semibold">Brain Dump</span>
      <input
        type="text"
        id="large-input"
        className="block w-full text-gray-900 border-2 border-slate-800 rounded-lg bg-gray-50 h-80"
      />
    </div>
  );
}
