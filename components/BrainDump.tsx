"use client";

import React, { useEffect, useState } from "react";

export default function BrainDump() {
  interface FormData {
    0: string;
  }
  const [formData, setFormData] = useState<FormData>({
    0: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("BrainDump");
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
    localStorage.setItem("BrainDump", data);
  }
  return (
    <div className="mt-6 w-full">
      <span className="font-semibold">Brain Dump</span>
      <label htmlFor="brainDump" className="sr-only">
        Brian Dump
      </label>
      <textarea
        className="resize-none w-full mt-2 block text-gray-900 border-2 border-slate-800 rounded-sm bg-gray-50 h-96"
        name="0"
        id="brainDump"
        defaultValue={formData[0]}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
}
