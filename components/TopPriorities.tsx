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
    console.log(formData);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    const data = JSON.stringify(formData);
    localStorage.setItem("TopPriorities", data);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Save form data to localStorage or submit it to server
    console.log(formData);
  }

  return (
    <div className="mt-8 w-full">
      <span className="font-semibold">Top Priorities</span>
      <div className="mt-2">
        <ul>
          <li>
            <input
              type="text"
              id="top1"
              name="0"
              defaultValue={formData[0]}
              onChange={handleInputChange}
              className="border-x-2 border-t-2 border-slate-800 text-gray-900 text-sm rounded-t-sm block w-full p-2.5"
            />
          </li>
          <li>
            <input
              type="text"
              id="top2"
              name="1"
              defaultValue={formData[1]}
              onChange={handleInputChange}
              className="border-2 border-slate-800 text-gray-900 text-sm block w-full p-2.5"
            />
          </li>
          <li>
            <input
              type="text"
              id="top3"
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
