"use client";

import { getTime } from "@/services/GetDate";
import { handleClick } from "@/services/Handlers";
import React from "react";

export default function TextInputs({
  type,
  count,
  hour,
  now,
  name,
  handleInputChange,
  formData,
}: any) {
  const currentHour = getTime();

  return currentHour === hour ? (
    <ul className="flex">
      <li>
        <span
          className="bg-blue-100 w-8 border-y-2 border-l-2 border-slate-800 text-gray-900 text-sm rounded-x-sm block p-2.5 first:border-t-0 dark:bg-slate-500 dark:border-slate-300 dark:text-slate-100"
          id="hourInput"
        >
          {hour}
        </span>
      </li>

      <li>
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          onClick={handleClick}
          className="bg-blue-100 w-full border-2 border-slate-800 text-gray-900 text-sm block p-2.5 first:border-t-0 dark:bg-slate-500 dark:border-slate-300 dark:text-slate-100"
        />
      </li>

      <li>
        <input
          type="text"
          id={name + 0.5}
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          onClick={handleClick}
          className="bg-blue-100 w-full border-y-2 border-r-2 border-slate-800 text-gray-900 text-sm block p-2.5 first:border-t-0 dark:bg-slate-500 dark:border-slate-300 dark:text-slate-100"
        />
      </li>
    </ul>
  ) : (
    <ul className="flex">
      <li>
        <span className="w-8 border-y-2 border-l-2  border-slate-800 text-gray-900 text-sm rounded-x-sm block p-2.5 first:border-t-0 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100">
          {hour}
        </span>
      </li>

      <li>
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          onClick={handleClick}
          className="w-full border-2 border-slate-800 text-gray-900 text-sm block p-2.5 first:border-t-0 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100"
        />
      </li>

      <li>
        <input
          type="text"
          id={name + 0.5}
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          onClick={handleClick}
          className="w-full border-y-2 border-r-2 border-slate-800 text-gray-900 text-sm block p-2.5 first:border-t-0 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100"
        />
      </li>
    </ul>
  );
}
