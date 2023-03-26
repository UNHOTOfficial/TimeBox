import React from "react";

export default function TextInputs({ type, count }: any) {
  return type != "pro" ? (
    <ul className="flex">
      <li>
        <span className="border-y-2 border-slate-800 text-gray-900 text-sm rounded-x-md block p-2.5 first:border-t-0">
          {5}
        </span>
      </li>
      <li>
        <input
          type="text"
          id="top1"
          className="border-2 border-slate-800 text-gray-900 text-sm block p-2.5 first:border-t-0 w-24"
          required
        />
      </li>
      <li>
        <input
          type="text"
          id="top1"
          className="border-y-2 border-slate-800 text-gray-900 text-sm block p-2.5 first:border-t-0 w-24"
          required
        />
      </li>
    </ul>
  ) : (
    <ul>
      <li></li>
    </ul>
  );
}
