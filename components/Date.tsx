import React from "react";

export default function Date() {
  return (
    <div className="flex justify-evenly mt-4 mb-5">
      <span className="font-semibold">Date:</span>
      <input
        type="text"
        id="top1"
        className="border-b-2 border-slate-800 text-gray-900 text-sm block"
        required
      />
    </div>
  );
}
