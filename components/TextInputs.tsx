"use client";

import { getTime } from "@/services/GetDate";
import { handleClick } from "@/services/Handlers";
import { useState } from "react";

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

  const [isDisabled, setIsDisabled] = useState(false);
  const [click, setClick] = useState(0);

  return currentHour === hour ? (
    <ul className="flex">
      <li>
        <span
          className="w-8 text-gray-900 text-sm rounded-x-sm block p-2.5 border border-slate-900 dark:text-slate-100 bg-blue-100 dark:border-slate-300 dark:bg-slate-800"
          id="hourInput"
        >
          {hour}
        </span>
      </li>

      <li>
        <label htmlFor={name} className="sr-only">
          Hour
        </label>
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
          className="w-full text-gray-900 text-sm block p-2.5   bg-blue-100 border border-slate-900 dark:text-slate-100 dark:border-slate-300 dark:bg-slate-800"
        />
      </li>

      <li>
        <label htmlFor={name + 0.5} className="sr-only">
          Hour
        </label>
        <input
          type="text"
          id={name + 0.5}
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
          className="w-full text-gray-900 text-sm block p-2.5   bg-blue-100 border border-slate-900 dark:text-slate-100 dark:border-slate-300 dark:bg-slate-800"
        />
      </li>
    </ul>
  ) : (
    <ul className="flex">
      <li>
        <span className="w-8 text-gray-900 text-sm rounded-x-sm block p-2.5 border border-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-100">
          {hour}
        </span>
      </li>

      <li>
        <label htmlFor={name} className="sr-only">
          Hour
        </label>
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
          className="w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-700 border border-slate-900 dark:text-slate-100 dark:border-slate-300"
        />
      </li>

      <li>
        <label htmlFor={name + 0.5} className="sr-only">
          Hour
        </label>
        <input
          type="text"
          id={name + 0.5}
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
          className="w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-700  border border-slate-900 dark:text-slate-100 dark:border-slate-300"
        />
      </li>
    </ul>
  );
}
