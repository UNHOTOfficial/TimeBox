"use client";

import { getTime } from "@/services/GetDate";
import { handleClick } from "@/services/Handlers";
import React, { useState } from "react";
import UnDoneTaskInput from "./UndoneTask";

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
    <div className="grid grid-flow-col">
      <span
        className="w-8 text-gray-900 text-sm rounded-x-sm block p-2.5 border border-slate-900 dark:text-slate-100 bg-blue-100 dark:border-slate-300 dark:bg-slate-800"
        id="hourInput"
      >
        {hour}
      </span>

      <UnDoneTaskInput
        key={name}
        name={name}
        handleInputChange={handleInputChange}
        click={click}
        formData={formData}
        setClick={setClick}
        setIsDisabled={setIsDisabled}
        handleClick={handleClick}
        isDisabled={isDisabled}
      />

      <UnDoneTaskInput
        key={name + 0.5}
        name={name + 0.5}
        handleInputChange={handleInputChange}
        click={click}
        formData={formData}
        setClick={setClick}
        setIsDisabled={setIsDisabled}
        handleClick={handleClick}
        isDisabled={isDisabled}
      />
    </div>
  ) : (
    <div className="grid grid-flow-col">
      <span className="w-8 text-gray-900 text-sm rounded-x-sm block p-2.5 border border-slate-900 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-100">
        {hour}
      </span>

      <label htmlFor={name} className="sr-only">
        Hour
      </label>
      <UnDoneTaskInput
        key={name}
        name={name}
        handleInputChange={handleInputChange}
        click={click}
        formData={formData}
        setClick={setClick}
        setIsDisabled={setIsDisabled}
        handleClick={handleClick}
        isDisabled={isDisabled}
      />

      <UnDoneTaskInput
        key={name + 0.5}
        name={name + 0.5}
        handleInputChange={handleInputChange}
        click={click}
        formData={formData}
        setClick={setClick}
        setIsDisabled={setIsDisabled}
        handleClick={handleClick}
        isDisabled={isDisabled}
      />
    </div>
  );
}
