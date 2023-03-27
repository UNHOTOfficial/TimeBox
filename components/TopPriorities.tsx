"use client";

import React, { useEffect, useState } from "react";
import TextInputs from "./TextInputs";

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

  useEffect(() => {
    const savedData = localStorage.getItem("TopPriorities");
    if (savedData) {
      const parsedData: FormData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

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
              className="border-x-2 border-t-2 border-slate-800 text-gray-900 text-sm rounded-t-sm block w-full p-2.5"
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
              className="border-2 border-slate-800 text-gray-900 text-sm block w-full p-2.5"
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
              className="border-x-2 border-b-2 border-slate-800 text-gray-900 text-sm rounded-b-sm block w-full p-2.5"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
