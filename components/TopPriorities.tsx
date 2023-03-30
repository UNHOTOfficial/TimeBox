"use client";

import { handleClick } from "@/services/Handlers";
import SetFormDataUseEffect from "@/services/UseEffect";
import React, { useState } from "react";

export default function TopPriorities() {
  interface FormData {
    0: string;
    1: string;
    2: string;
  }
  const [formData, setFormData] = useState<FormData>({
    0: "",
    1: "",
    2: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [click, setClick] = useState(0);

  SetFormDataUseEffect(setFormData, "TopPriorities");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    const data = JSON.stringify(formData);
    localStorage.setItem("TopPriorities", data);
  }

  return (
    <div className="mt-8 w-full">
      <span className="font-semibold">Top Priorities</span>
      <div className="mt-2">
        <ul>
          <li>
            <label htmlFor="first" className="sr-only">
              First Priority
            </label>
            <input
              type="text"
              id="first"
              name="0"
              defaultValue={formData[0]}
              onChange={handleInputChange}
              onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
              className="border border-slate-800 text-gray-900 text-sm rounded-t-sm block w-full p-2.5 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100"
            />
          </li>
          <li>
            <label htmlFor="second" className="sr-only">
              Second Priority
            </label>
            <input
              type="text"
              id="second"
              name="1"
              defaultValue={formData[1]}
              onChange={handleInputChange}
              onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
              className="border my-1 border-slate-800 text-gray-900 text-sm block w-full p-2.5 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100"
            />
          </li>
          <li>
            <label htmlFor="third" className="sr-only">
              Third Priority
            </label>
            <input
              type="text"
              id="third"
              name="2"
              defaultValue={formData[2]}
              onChange={handleInputChange}
              onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
              className="border border-b-2 border-slate-800 text-gray-900 text-sm rounded-b-sm block w-full p-2.5 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
