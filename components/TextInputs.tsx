import React from "react";

export default function TextInputs({ type, count, hour }: any) {
  return type != "pro" ? (
    <ul className="flex">
      <li>
        <span className="w-8 border-y-2 border-slate-800 text-gray-900 text-sm rounded-x-sm block p-2.5 first:border-t-0">
          {hour}
        </span>
      </li>
      <li>
        <input
          type="text"
          id="top1"
          className="w-full border-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
          required
        />
      </li>
      <li>
        <input
          type="text"
          id="top1"
          className="w-full border-y-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
          required
        />
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <input
          type="text"
          id="top1"
          className="border-x-2 border-t-2 border-slate-800 text-gray-900 text-sm rounded-t-sm block w-full p-2.5"
          required
        />
      </li>
      <li>
        <input
          type="text"
          id="top1"
          className="border-2 border-slate-800 text-gray-900 text-sm block w-full p-2.5"
          required
        />
      </li>
      <li>
        <input
          type="text"
          id="top1"
          className="border-x-2 border-b-2 border-slate-800 text-gray-900 text-sm rounded-b-sm block w-full p-2.5"
          required
        />
      </li>
    </ul>
  );
}
