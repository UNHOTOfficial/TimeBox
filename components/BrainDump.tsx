"use client";

import SetFormDataUseEffect from "@/services/UseEffect";
import React, { useState } from "react";

export default function BrainDump() {
  interface FormData {
    0: string;
  }
  const [formData, setFormData] = useState<FormData>({
    0: "",
  });

  SetFormDataUseEffect(setFormData, "BrainDump");

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
        className="resize-none w-full mt-2 p-2.5 block text-gray-900 border border-slate-800 rounded-sm bg-gray-50 h-96 dark:bg-slate-700 dark:border-slate-300 dark:text-slate-100"
        name="0"
        id="brainDump"
        defaultValue={formData[0]}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
}
